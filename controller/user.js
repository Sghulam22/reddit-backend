var user = require('../models/user');

// Display list of all Authors.
exports.createUser = function(req, res) {
    res.send('createuser');
};

// Display detail page for a specific Author.
exports.editUser = function(req, res) {
    res.send('edit user: ' + req.params.id);
};

// Display Author create form on GET.
exports.deleteUser = function(req, res) {
    res.send('delete user');
};
