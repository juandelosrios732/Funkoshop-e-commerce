const adminControllers = {
    admin: (req, res) => res.send('Route for admin View'),
    adminCreateGet: (req, res) => res.send('Route for create View'),
    adminCreatePost: (req, res) => res.send('Route for add create View'),
    adminEditGet: (req, res) => res.send('Route for edit item View'),
    adminEditPut: (req, res) => res.send('Route for add item edited View'),
    adminDelete: (req, res) => res.send('Route for delete item edited View')
}

module.exports = adminControllers;
