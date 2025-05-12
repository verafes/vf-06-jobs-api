const register = async (req, res) => {
  res.send('User has been registered');
};

const login = async (req, res) => {
  res.send('User has been logged in');
};

module.exports = {
  register,
  login,
};