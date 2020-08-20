'use strict';

exports.list_all_persons = function(req, res) {
    res.send('list persons');
};

exports.create_a_person = function(req, res) {
    res.send('creating a person');
};

exports.get_a_person = function(req, res) {
    res.send('get a person');
};

exports.update_a_person = function(req, res) {
    res.send('update a person');
};

exports.delete_a_person = function(req, res) {
    res.send('delete a person');
};