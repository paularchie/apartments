import { mongoose } from '../extentions/mongoose';

const imageSchema = new mongoose.Schema({
    name: String,
    path: String,
});

imageSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
imageSchema.set('toJSON', {
    virtuals: true
});

export const ImageSchema = mongoose.model('Image', imageSchema);
