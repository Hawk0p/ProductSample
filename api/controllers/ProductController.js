/**
* ProductController
*
* @description :: Server-side logic for managing products
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	all: function(req, res){
		Product.find().exec(function (err, products){
			if (err) {
				return res.serverError(err);
			}
			//console.log(products);
			return res.view('products', {supplies:products});
		});
	},
	add: function(req, res) {
		Product.create({name: req.param('name'), price: req.param('price')}).exec(function(err, product) {
			if (err) {
				return res.serverError(err);
			}
			res.redirect('/allproducts');
		})
	}
};
