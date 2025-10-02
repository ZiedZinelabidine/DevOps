const { createTokenCandidat, findAccountingByEmail } = require("./utils");

exports.login = async (req, res) => {
  try {
    // Check if email and password were provided
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "Please provide both email and password.",
      });
    }

    // Find the user by email
    const user = await findAccountingByEmail(email);

    if (!user) {
      return res.status(403).send({
        message: "Invalid credentials!",
      });
    }

    // Verify the password
    const isPasswordValid = await user.verifyPassword(password);
    if (!isPasswordValid) {
      return res.status(403).send({
        message: "Invalid credentials!",
      });
    }

    // Create the token
    const token = await createTokenCandidat(user, "ACCOUNTING");

    // Successful login response
    return res.status(200).send({
      message: "Login successful!",
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      message: "Internal Server Error. Please try again.: " +error,
    });
  }
};
