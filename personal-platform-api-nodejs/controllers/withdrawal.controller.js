const Withdrawal = require("../models/withdrawal.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Accounting = require("../models/accounting.model");
const {findWithdrawalMethodByUserId,checkjwt} = require("./utils");
const fs = require('fs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const qs = require('qs');
const db = require("../models");
const { validateWithdrawal , validateWithdrawalUpdate} = require("../validators/withdrawal.validators");
const crypto = require("crypto");
const revoluteController = require("../controllers/revolute.controller.js");
const WithdrawalMethod = require("../models/withdrawalMethod.model.js");
const companyController = require("../controllers/company.controller.js");


require('dotenv').config();

exports.createWithdrawal = async (req, res) => {
    const withdrawalData = req.body;
    let transaction;
    let user;
    let exchangeData;
    
    // Check JWT for user authorization
    const jwt= await checkjwt(req, res,  withdrawalData.userId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });
    }

    try {
        // Fetch user based on typeUser
        user = await findUserByType(withdrawalData.userId, withdrawalData.typeUser);
        
        if (!user) {
            return res.status(400).json({ error: 'The user ID doesn’t exist' });
        }

        const withdrawalMethod = await findWithdrawalMethodByUserId(withdrawalData.userId, withdrawalData.typeUser);
        if (!withdrawalMethod) {
            return res.status(400).json({ error: 'User doesn’t have a Withdrawal Method' });
        }

        // Check user status and withdrawal method status
        if (user.status !== 'ACTIVE') {
            return res.status(400).json({ error: `The user ID: ${withdrawalData.userId} is not ACTIVE` });
        }

        if (withdrawalMethod.status !== 'VALIDATED') {
            return res.status(400).json({ error: 'Withdrawal Method is not validated' });
        }

        transaction = await db.connection.transaction();

        exchangeData = {
            amount: Math.round(parseFloat((withdrawalData.totalAmount * 0.80).toFixed(2))) ,
            toCurrency: withdrawalMethod.currency ,
        }      

        const companyData = {
            presidentId: withdrawalData.userId ,
            presidentType: withdrawalData.typeUser
        }

        const company = await companyController.getCompanyById(companyData);               // Calculate new balance      
       
        const exchangeRateResponse = await revoluteController.exchangeAmount(exchangeData) ;
        withdrawalData.totalAmount = Math.round(withdrawalData.totalAmount);
        withdrawalData.withdrawalMethodId = withdrawalMethod.id ;
        withdrawalData.rate = exchangeRateResponse.data.rate ;
        withdrawalData.transfertPrice = Math.round(exchangeRateResponse.data.fee.amount);
        withdrawalData.netAmount = Math.round(exchangeRateResponse.data.to.amount - exchangeRateResponse.data.fee.amount);
        withdrawalData.companyId = company.id;
        withdrawalData.nameUser = user.name + ' ' + user.first_name ;
        withdrawalData.emailUser = user.email;

        // Validate withdrawal data against user balance
        const { error } = validateWithdrawal(withdrawalData, user.balance_details);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

         // Create the withdrawal record
        const withdrawal = await Withdrawal.create(withdrawalData, { transaction }); 
        const newBalance = user.balance_details - withdrawal.totalAmount;

        // Update the user's balance based on their type
        await updateUserBalance(user, newBalance, transaction);

        await transaction.commit();

        let amout ;

        if(withdrawalMethod.bank_country === 'FR') {
            amout = parseFloat((withdrawalData.totalAmount).toFixed(2));
        } else {
            amout = parseFloat((withdrawalData.totalAmount * 0.80).toFixed(2));
        }

        const payOutData = {    
                request_id: generateSecureUniqueId(33),
                account_id: `${process.env.REVOLUTE_ACCOUNT_ID}`,
                receiver: {
                  counterparty_id: withdrawalMethod.revolute_counterpartieId, 
                  account_id: withdrawalMethod.revolute_counterpartie_accountId
                },
                amount: amout ,
                currency: "EUR"    
        };

        const payOut = await revoluteController.createPayOut(payOutData);

        if (payOut.success) {
            await withdrawal.update({ withdrawal_description: 'CREATED_ON_REVOLUT', revoluteId: payOut.id }, { where: { id: withdrawal.id } } , { transaction });

        } else {
            await withdrawal.update({ withdrawal_description: 'ERROR_CREATION_REVOLUT : '+ payOut.error }, { where: { id: withdrawal.id } } , { transaction });
        }
        const response = { ...withdrawal.get(),  withdrawalMethod: withdrawalMethod , company: company};
        return res.status(201).json(response);
       
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error("Failed to create withdrawal:", error);
        return res.status(500).json({ error: "Failed to create withdrawal  : " + error });
    }
};

// Function to find the user based on the user type
const findUserByType = async (userId, userType) => {
    switch (userType) {
        case 'CANDIDAT':
            return await User.findByPk(userId);
        case 'RECRUTER':
            return await Recruter.findByPk(userId);
        case 'ACCOUNTING':
            return await Accounting.findByPk(userId);
        default:
            return null; // Not a valid user type
    }
};

// Function to update the user's balance based on their type
const updateUserBalance = async (user, newBalance, transaction) => {
    switch (user.type) {
        case 'CANDIDAT':
            await User.update({ balance_details: newBalance }, { where: { id: user.id }, transaction });
            break;
        case 'RECRUTER':
            await Recruter.update({ balance_details: newBalance }, { where: { id: user.id }, transaction });
            break;
        case 'ACCOUNTING':
            await Accounting.update({ balance_details: newBalance }, { where: { id: user.id }, transaction });
            break;
        default:
            throw new Error('Invalid user type for balance update');
    }
};


exports.getWithdrawals = async(req, res) => {
    try {
        const userId = req.query.userId;
        const typeUser = req.query.typeUser;

        const withdrawals = await Withdrawal.findAll({
                where: { userId: userId  , typeUser: typeUser },
                include: [{
                    model: WithdrawalMethod,
                    required: true
                }  
                ],                order: [
                    ["createdAt", "DESC"]
                ]
            });  

            return res.json({ data: withdrawals });
    } catch (error) {
        console.error("Error fetching withdrawals:", error);
        return res.status(500).json({ error: "An error occurred while fetching withdrawals : " + error });
    }
};

exports.getWithdrawal = async(req, res) => {
    try {
        const withdrawalId = req.params.id;
        const withdrawal = await Withdrawal.findOne({
            where: { id: withdrawalId },
            include: [{
                model: Withdrawal
            }]
        });
        return res.json({ data: withdrawal });
    } catch (error) {
        console.error("Error fetching withdrawal:", error);
        return res.status(500).json({ error: "An error occurred while fetching withdrawal : " + error });
    }
};

exports.updateWithdrawal = async(req, res) => {
    const withdrawalId = req.params.id;
    const withdrawalDataStatus = req.body;

    const { error } = validateWithdrawalUpdate(withdrawalDataStatus);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const existingWithdrawal = await Withdrawal.findByPk(withdrawalId);
        if (!existingWithdrawal) {
            return res.status(404).json({ error: "Withdrawal not found" });
        }

        await existingWithdrawal.update(withdrawalDataStatus);

        const updatedWithdrawal= await Withdrawal.findByPk(withdrawalId);

        return res.status(200).json(updatedWithdrawal);
    } catch (error) {
        console.error("Failed to update status withdrawal :", error);
        return res.status(500).json({ error: "Failed to update status withdrawal : " + error });
    }
};

function generateSecureUniqueId(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
  }
  