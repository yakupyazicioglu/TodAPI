var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    gId: {
        type: String,
        required: true
    },
    gName: {
        type: String,
        required: true,
        trim: true
    },
    gValue: {
        type: Number,
        required: true
    }
});

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/genre' + this._id;
    });

module.exports = mongoose.model('Genre', GenreSchema);