const mongoose = require('mongoose');
const BoardSchema = mongoose.Schema({
    BoardName: {
        type: String,
        maxlength: 20,
        unique: 1,
        required: true
    },
    MakeUser: {
        type: String,
        trim: true,
        default: '(익명)'
    },
    Board: Array[10][10]
})

const UserSchema = mongoose.Schema({
    Exp: {
        type: Number,
        default: 0
    },
    UserName: {
        type: String,
        trim: true,
        unique: 1,
        required: true
    },
    Password: {
        type: String,
        trim: true,
        required: true
    }
})

const Board = mongoose.model('board', BoardSchema);
const User = mongoose.model('user', UserSchema);

module.exports = { Board };
module.exports = { User };
