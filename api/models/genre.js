var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    genreId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
});

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/genre' + this._id;
    });

module.exports = mongoose.model('Genre', GenreSchema);