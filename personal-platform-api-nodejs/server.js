const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require('express');
const cors = require('cors');
const db = require("./models");
const { logger } = require('./middlewares/jwt.middleware');
const userRouter = require('./routes/user.routes');
const authUserRouter = require('./routes/auth.user.routes');
const dateuserRouter = require('./routes/dateuser.routes');
const datewithtechcontactRouter = require('./routes/datewithtechcontact.routes');
const authDateUserRouter = require('./routes/auth.dateuser.routes');
const authEntrepriseRouter = require('./routes/auth.entreprise.routes');
const entrepriseRouter = require('./routes/entreprise.routes');
const projectRouter = require('./routes/project.routes');
const proposalEntreprise = require('./routes/proposalEntreprise.routes');
const proposal = require('./routes/proposals.route');
const payment = require('./routes/payment.route');
const withdrawal = require('./routes/withdrawal.route');
const withdrawalMethod = require('./routes/withdrawalMethod.route');
const loginRouter = require('./routes/login.route');
const soldedproducts = require('./routes/soldedproducts.route');
const product = require('./routes/product.route');
const requestcompanycreation = require('./routes/requestcompanycreation.route');
const recruterRouter = require('./routes/recruter.routes');
const authRecruterRouter = require('./routes/auth.recruter.routes');
const recruitmentRouter = require('./routes/recruitement.routes.js');
const comments = require('./routes/comments.route.js');
const appeloffres = require('./routes/appelOffre.routes.js');
const accountingRouter = require('./routes/accounting.routes.js');
const authAccountingRouter = require('./routes/auth.accounting.routes.js');
const exchangerate = require('./routes/exchangerate.routes.js');
const getchatidRouter = require('./routes/chatid.routes.js');
const contactRouter = require('./routes/contact.routes.js');
const proposalAppelOffreRouter = require('./routes/proposalappelOffre.routes');
const CompanyRouter = require('./routes/company.routes');
const forgetpassword = require('./routes/forgetpassword.routes');
const invoicingRouter = require('./routes/invoicing.routes');
const accountingJobRouter = require('./routes/accountingJob.routes');
const revoluteRouter = require('./routes/revolute.routes');
const marketplaceRouter = require('./routes/marketplaceProduct.routes');
const s3Router = require('./routes/s3.routes');

const { verifyToken } = require("./middlewares/jwt.middleware");

const app = express();

app.use(cors({}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use custom logging middleware
app.use(logger);

// Prepare DB
db.connection.sync();

const apiRouter = express.Router();
app.use('/v1', apiRouter);

// Simple route
apiRouter.get('/status', (req, res) => {
  const version = process.env.npm_package_version;
  res.json({ message: 'Welcome to ItGalaxy API', version });
});

// Define your routes here
apiRouter.use('/login', loginRouter);
apiRouter.use('/forget-password', forgetpassword);
apiRouter.use('/user', authUserRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/dateuser', authDateUserRouter);
apiRouter.use('/dateusers', dateuserRouter);
apiRouter.use('/datewithtech', datewithtechcontactRouter); 
apiRouter.use('/recruter', authRecruterRouter);
apiRouter.use('/recruters', recruterRouter);
apiRouter.use('/accountings', accountingRouter);
apiRouter.use('/accounting', authAccountingRouter);
apiRouter.use('/recruitement', recruitmentRouter);
apiRouter.use('/entreprise', authEntrepriseRouter);
apiRouter.use('/entreprises', entrepriseRouter);
apiRouter.use('/projects', projectRouter);
apiRouter.use('/appeloffres', appeloffres);
apiRouter.use('/proposalsentreprise', verifyToken, proposalEntreprise);
apiRouter.use('/proposals', verifyToken, proposal);
apiRouter.use('/products', product);
apiRouter.use('/requestcompanycreation', verifyToken, requestcompanycreation);
apiRouter.use('/soldedproducts', soldedproducts);
apiRouter.use('/payment', verifyToken, payment);
apiRouter.use('/exchangerate', verifyToken, exchangerate);
apiRouter.use('/withdrawals', verifyToken, withdrawal);
apiRouter.use('/withdrawalmethods', verifyToken, withdrawalMethod);
apiRouter.use('/comments', comments);
apiRouter.use('/chatid', getchatidRouter);
apiRouter.use('/contacts', contactRouter);
apiRouter.use('/proposalsappeloffre', proposalAppelOffreRouter);
apiRouter.use('/accountingjobs', accountingJobRouter);
apiRouter.use('/company', CompanyRouter);
apiRouter.use('/invoicing', invoicingRouter);
apiRouter.use('/revolute', revoluteRouter);
apiRouter.use('/marketplaceproduct', marketplaceRouter);
apiRouter.use('/s3', s3Router);

// Sentry error handler must be before any other error middleware
if (process.env.NODE_ENV === 'production') {
  app.use(Sentry.Handlers.errorHandler());
}

// Optional: Custom error handling middleware
app.use((err, req, res, next) => {
  // The error id will be attached to `res.sentry` if the error was captured by Sentry
  res.statusCode = 500;
  res.end(res.sentry + '\n'); // Provide reference to Sentry error or a custom error message
});

// Set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});