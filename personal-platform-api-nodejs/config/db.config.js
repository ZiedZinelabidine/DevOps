module.exports = {
    HOST: process.env.HOST,         // Database host
    PORT_DB: process.env.PORT_DB,   // Database port
    USERDB: process.env.USERDB,     // Database username
    PASSWORD: process.env.PASSWORD,  // Database password
    DB: process.env.DB,              // Database name
    dialect: "postgres",             // Database dialect
    logging: console.log,            // Optional: to see SQL queries being executed
    dialectOptions: {
     //   connectTimeout: 10000,      // Connection timeout
        ssl: false
    },
    pool: {
        max: 10, // Increase max connections as needed
        min: 1,
        acquire: 30000,
        idle: 60000 * 60 * 24 // Keep idle connections open for 1 day (24 hours)
    },
};
