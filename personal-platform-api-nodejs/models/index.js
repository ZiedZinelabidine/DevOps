const dbConfig = require("../config/db.config.js");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERDB, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT_DB,
    dialect: dbConfig.dialect,
    operatorsAliases: false, // Disable operatorsAliases as it’s deprecated
    dialectOptions: {
        keepAlive: true,
        connectionTimeoutMillis: 30000, // Adjust as needed
        useUTC: true, // For reading timestamps
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

// Method for testing the connection with retry logic
async function testConnection(retries = 5, delay = 1000) {
    let attempts = 0;

    while (attempts < retries) {
        try {
            await sequelize.authenticate(); // Attempt to connect to the database
            console.log('Connection to the database has been established successfully.');
            return; // Exit the function if successful
        } catch (error) {
            attempts++;
            console.error(`Connection attempt ${attempts} failed:`, error.message);
            
            if (attempts >= retries) {
                console.error('Max retries reached. Unable to connect to the database.');
                // Optionally exit the process if the connection fails and is critical
                process.exit(1);
            }

            console.log(`Retrying connection in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
        }
    }
}

// Call the test connection function
testConnection();

// Export db and sequelize for use in other parts of the application
db.Sequelize = Sequelize;
db.connection = sequelize;

module.exports = db;
