const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    shopItemGet: (req, res) => {

        // Buscar la información del item con el ID de la ruta
        const id = req.params.id;
    
        res.send({item});
    },
    shopItemPost: (req, res) => res.send('Route for add the current item to the shop cart'),
    shopCart: (req, res) => res.send('Route for cart view'),
    shopCartPost: (req, res) => res.send('Route for go to checkout page')
}

module.exports = shopControllers;
