'use strict';

exports.list_all_persons = function(req, res) {
    res.json({});
};

exports.create_a_person = function(req, res) {
    res.send('creating a person');
};

exports.get_a_person = function(req, res) {
    res.json({
        "name": "Michael Dwyer",
        "avatar": 1,
        "position-X": 40,
        "position-Y": 50,
        "status": 1,
        "availability": "available",
        "mood": "relaxed"
    });
};

exports.update_a_person = function(req, res) {
    res.send('update a person');
};

exports.delete_a_person = function(req, res) {
    res.send('delete a person');
};