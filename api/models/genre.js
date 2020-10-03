'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenreSchema = new Schema({
    genre_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre' + this._id;
    });

module.exports = mongoose.model('Genre', BookSchema);