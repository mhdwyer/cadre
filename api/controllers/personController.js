'use strict';

exports.list_all_persons = function(req, res) {
    res.json([{
        "name": "Michael Dwyer",
        "email": "mhdwyer@hotmail.com",
        "positionTop": 250,
        "positionLeft": 380,
        "status": 1,
        "availability": "available",
        "mood": "relaxed"
    },{
        "name": "Jennifer Dwyer",
        "email": "jdwyercpa@hotmail.com",
        "positionTop": 58,
        "positionLeft": 360,
        "status": 1,
        "availability": "available",
        "mood": "relaxed"
    }
    ]);
};

exports.create_a_person = function(req, res) {
    res.send('creating a person');
};

exports.get_a_person = function(req, res) {
    res.json({
        "name": "Michael Dwyer",
        "email": "mhdwyer@hotmail.com",
        "positionTop": 250,
        "positionLeft": 380,
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