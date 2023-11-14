const authControllers = {
    loginGet: (req, res) => res.send('Route for login View'),
    loginPost: (req, res) => res.send('Route for login submit View'),
    registerGet: (req, res) => res.send('Route for register View'),
    registerPost: (req, res) => res.send('Route for register submit View'),
}

module.exports = authControllers;
