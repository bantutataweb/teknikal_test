//use path module
const express = require('express'),
      app = express(),
      port = 3888;

//backend controller
//Kategori
app.use('/api_kategori', require('./controller/kategori'))
//Product
app.use('/api_product', require('./controller/product'))

//Halaman 404
app.get('*', function(req, res){
	res.status(404).send('Only Request API');
});

//server listening
app.listen(port, () => {
    console.log(`Server sedang berjalan di PORT ${port}`);
});