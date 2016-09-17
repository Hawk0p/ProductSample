module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  'get /login': {
       view: 'login'
  },

  'post /login': 'AuthController.login',

  '/logout': 'AuthController.logout',

  'get /signup': {
    view: 'signup'
  },
  'get /productEntry':{
    view: 'productEntry'
  },
  'get /allproducts': 'ProductController.all',
  'post /addproduct': 'ProductController.add'

};
