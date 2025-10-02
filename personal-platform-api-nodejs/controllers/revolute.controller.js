require('dotenv').config();
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const Revolute = require('../models/revolute.model'); // Path to your model


exports.refreshAccessToken = async(req, res) => {
    
  try {
    const tokenUrl = `${process.env.REVOLUTE_URL}/api/1.0/auth/token`;
    const revolute_client_id =  `${process.env.REVOLUTE_CLIENT_ID}`;
    const jwtToken = generateToken(revolute_client_id); // Generate JWT for refresh
    let accessToken ;
    
    const response = await axios.post(tokenUrl, qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: `${process.env.REVOLUTE_REFRESH_TOKEN}`,
        revolute_client_id: revolute_client_id,
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_assertion: jwtToken,
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    // Update tokens
    accessToken = response.data.access_token;

    await updateAccessTokenInDB(accessToken); // Update the DynamoDB with the new access token

    return res.status(200).json({ message: "Success refresh token" });

} catch (error) {
    console.error('Error refreshing access token:', error);
    res.status(500).json({ error: 'Failed to refresh access token.' });
 }
}

function getPrivateKey() {
    return fs.readFileSync(process.env.PRIVATE_KEY_PATH, 'utf8');
}

// Function to generate JWT for client assertion
function generateToken() {
    const privateKey = getPrivateKey();
    const now = Math.floor(Date.now() / 1000);

    const payload = {
        iss: `${process.env.REVOLUTE_ISS}`,
        sub: `${process.env.REVOLUTE_CLIENT_ID}`,
        aud: "https://revolut.com",
        exp: 1740042088
    };
    return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
}


// Function to update the access token in a single row
async function updateAccessTokenInDB(newAccessToken) {

    try {
        // Directly update the access token, no WHERE clause needed since there's only one row
        const [updatedCount, updatedRows] = await Revolute.update(
            { access_token: newAccessToken }, // New value to set
            {
                where: {id: 1}, // No condition needed for single row scenario
                returning: true, // Return the updated row
            }
        );

        if (updatedCount === 0) {
            console.log('No record was updated. This should not happen with a single row.');
        } else {
            console.log('Access token updated successfully:', updatedRows[0]); // Log the updated record
            return updatedRows[0]; // Return the updated row object if needed
        }
    } catch (error) {
        console.error('Error updating access token:', error);
    }
}

async function getAccessToken() {
    try {
        const tokens = await Revolute.findByPk(1) ;
        return tokens.access_token ;

    } catch (error) {
        console.error('Error updating access token:', error);
        return false ;
    }
}

exports.createCounterparty = async (counterpartyData) => {
    
    try {
        const accessToken =  await getAccessToken() ;
        const response    =  await axios.post(`${process.env.REVOLUTE_URL}/api/1.0/counterparty`, counterpartyData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Counterparty created successfully:', response.data);
        return {success : true , id : response.data.id , accountId : response.data.accounts[0].id }; // Return created counterparty details
    } catch (error) {
        console.error('Error creating counterparty:', error.response ? error.response.data : error.message);
        return {success : false , error : error.message }; // Return created counterparty details
    }
}

exports.deleteCounterparty = async (counterpartyId) => {
    try {
        const accessToken = await getAccessToken(); // Get the current access token

        if (!accessToken) {
            throw new Error("Access token is missing.");
        }

        // Construct the endpoint for deleting the counterparty
        const deleteUrl = `${process.env.REVOLUTE_URL}/api/1.0/counterparty/${counterpartyId}`;


        const response = await axios.delete(deleteUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Counterparty deleted successfully:', response.data);
        return { success: true, message: 'Counterparty deleted successfully.' }; // Return success message
    } catch (error) {
        console.error('Error deleting counterparty:', error.response ? error.response.data : error.message);
        return { success: false, error: error.message }; // Return error message
    }
};

exports.createPayOut = async (payOutData) => {
   
    try {
           const accessToken =  await getAccessToken() ;
           const response    =  await axios.post(`${process.env.REVOLUTE_URL}/api/1.0/pay`, payOutData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('PayOut created successfully:', response.data);
        return {success : true , id : response.data.id }; // Return created counterparty details
    } catch (error) {
        console.error('Error creating PayOut:', error.response ? error.response.data : error.message);
        return {success : false , error : error.message }; // Return created counterparty details
    }
}

exports.exchangeAmount = async (exchangeData) => {
    try {
           const accessToken =  await getAccessToken() ;
           const response    =  await axios.get(`${process.env.REVOLUTE_URL}/api/1.0/rate?from=EUR&amount=${exchangeData.amount}&to=${exchangeData.toCurrency}` , {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });


        console.log('exchange successfully:', response.data);
        return {success : true , data : response.data }; // Return created counterparty details
    } catch (error) {
        console.error('Error creating exchange:', error.response ? error.response.data : error.message);
        return {success : false , error : error.message }; // Return created counterparty details
    }
}