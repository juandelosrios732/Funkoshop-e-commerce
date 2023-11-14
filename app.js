const express = require('express');
// const req = require('express/lib/request');
const app = express();
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');

app.use(express.static('public_html'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);


app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));