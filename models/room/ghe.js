const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gheSchema = new Schema({
    phongchieu_id: { type: Schema.Types.ObjectId, ref: 'phongchieu', required: true },
    loaighe_id: { type: Schema.Types.ObjectId, ref: 'loaighe', required: true },
    hang: { type: String, required: true },
    cot: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ghe', gheSchema);
