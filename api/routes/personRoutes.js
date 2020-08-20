'use strict';
module.exports = function(app) {
  var personController = require('../controllers/personController');

  // todoList Routes
  app.route('/persons')
    .get(personController.list_all_persons)
    .post(personController.create_a_person);


  app.route('/persons/:personId')
    .get(personController.get_a_person)
    .put(personController.update_a_person)
    .delete(personController.delete_a_person);
};