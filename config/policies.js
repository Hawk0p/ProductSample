module.exports.policies = {

   '*': true,

  'PostController': {
    '*': 'isAuthenticated'
  }
  /*,

  'ProductController': {
    '*': 'isAuthenticated'
  },*/

};
