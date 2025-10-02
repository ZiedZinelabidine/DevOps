const PaymentWithWallet = require("../models/paymentWithWallet.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Accounting = require("../models/accounting.model");
const db = require("../models");
const { validatepaymentWithWallet } = require("../validators/paymentWithWallet.validators");
const { checkjwt } = require("./utils");

exports.createpaymentWithWallet = async (req, res) => {
    const paymentWithWalletData = req.body;
    let user;
    try {
         const jwt = await checkjwt(req, res, paymentWithWalletData.customerId);
        if (!jwt) {
            return res.status(401).json({ error: "Unauthorized user" });
        } 

        // Mapping of customer types to corresponding models
        const userModels = {
            'CANDIDAT': User,
            'RECRUTER': Recruter,
            'ACCOUNTING': Accounting
        };

        // Fetch user based on customer type
        const UserModel = userModels[paymentWithWalletData.customerType];
        if (!UserModel) {
            console.error(`Invalid customer type: ${paymentWithWalletData.customerType}`);
            return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets"  });

        }

        user = await UserModel.findByPk(paymentWithWalletData.customerId);
        if (!user) {
            console.log('User does not exist!');
            return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets" });

        }

        if (user.status !== 'ACTIVE') {
            console.log(`The user ID ${paymentWithWalletData.customerId} is not ACTIVE`);
            return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets " });

        }
        // Validate the payment intent with wallet
        const { error } = validatepaymentWithWallet(paymentWithWalletData, user.balance_details);
        if (error) {
            console.error("[PAYMENT WALLET ERROR]:  Error validate payment:", error);
            return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets: " +error });

        }

        // Create the payment intent with wallet
        const paymentWithWallet = await PaymentWithWallet.create(paymentWithWalletData);
        const newBalance = user.balance_details - parseFloat(paymentWithWallet.amount);

        // Update balance for the specific user type
        await UserModel.update({ balance_details: newBalance }, {
            where: { id: user.id }
        });
      
        return res.status(201).json({ id: 'paymentwallet' + paymentWithWallet.id , status: 'success' });


    } catch (error) {
        console.error("[PAYMENT WALLET ERROR]: Failed to create payment intent with wallet:", error);
        return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets: " +error });

    }
};


exports.getpaymentWithWallets = async (req, res) => {
    try {
        const customerId = req.query.customerId;
        const paymentWithWallets = await paymentWithWallet.findAll({
            where: { customerId: customerId },
            order: [
                ["createdAt", "DESC"]
            ]
        });
        return res.json({ data: paymentWithWallets });
    } catch (error) {
        console.error("Error fetching paymentWithWallets:", error);
        return res.status(500).json({ error: "An error occurred while fetching paymentWithWallets: " +error });
    }
};

exports.getpaymentWithWallet = async (req, res) => {
    try {
        const paymentWithWalletId = req.params.id;
        const paymentWithWallet = await paymentWithWallet.findOne({
            where: { id: paymentWithWalletId },
            include: [{
                model: paymentWithWallet
            }]
        });
        return res.json({ data: paymentWithWallet });
    } catch (error) {
        console.error("Error fetching paymentWithWallet:", error);
        return res.status(500).json({ error: "An error occurred while fetching paymentWithWallet : " +error });
    }
};

exports.createRefundWithWallet = async (req, res) => {

    let user;
    const { amount, payerId, payerType } = req.body;

    const walletPaymentData = {
        amount: amount,
        customerId: payerId,
        customerType: payerType,
      };

    try {
        // Mapping of customer types to corresponding models
        const userModels = {
            'CANDIDAT': User,
            'RECRUTER': Recruter,
            'ACCOUNTING': Accounting
        };

        // Fetch user based on customer type
        const UserModel = userModels[walletPaymentData.customerType];
        if (!UserModel) {
            console.error(`Invalid customer type: ${walletPaymentData.customerType}`);
            console.error("[REFUND WALLET ERROR]: An error occurred while fetching refundtWithWallet  " );

            return res.status(500).json({ error: "An error occurred while fetching refundtWithWallet  " });

        }

        user = await UserModel.findByPk(walletPaymentData.customerId);
        if (!user) {
            console.error("[REFUND WALLET ERROR]: An error occurred while fetching refundtWithWallet : " );
            return res.status(500).json({ error: "An error occurred while fetching refundtWithWallet : "});

        }

        if (user.status !== 'ACTIVE') {
            console.error("[REFUND WALLET ERROR]: An error occurred while fetching refundtWithWallet : " );
            return res.status(500).json({ error: "An error occurred while fetching refundtWithWallet : " });
        }

        // Validate the payment intent with wallet
        const { error } = validatepaymentWithWallet(walletPaymentData, user.balance_details);
        if (error) {
            console.error("[REFUND WALLET ERROR]: An error occurred while fetching refundtWithWallet : " +error );
            return res.status(500).json({ error: "An error occurred while fetching refundtWithWallet : " +error });
        }

        // Create the payment intent with wallet
        const paymentWithWallet = await PaymentWithWallet.create(walletPaymentData);
        const newBalance = user.balance_details + walletPaymentData.amount;

        // Update balance for the specific user type
        await UserModel.update({ balance_details: newBalance }, {
            where: { id: user.id }
        });
        console.info("[REFUND WALLET SUCCESS]: paymentwallet" + paymentWithWallet.id );

        return res.status(201).json({ orderID: 'paymentwallet' + paymentWithWallet.id  });

    } catch (error) {
        console.error("[REFUND WALLET ERROR]: Failed to create payment intent with wallet:", error);
        return res.status(500).json({ error: "An error occurred while fetching refundtWithWallet : " +error });
    }

  
}

