const Mongoose = require('mongoose');

const NoteShema = new Mongoose.Schema({
    login:{
        type: String,
        required: [true, 'Логин добавь блин'],
        unique: true,
        trim: true,
        maxlength:[16, 'шото длинное']
    },
    password:{
        type: String,
        required: [true, 'Логин добавь блин'],
        maxlength:[16, 'шото длинное']
    }
});

module.exports = Mongoose.models.Note || Mongoose.model('Note', NoteShema);