import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformation: string;
    publicId: String;
    securedUrl: String;
    width: number;
    height: number;
    config: object;
    transformationUrl: URL;
    aspectRatio: string;
    color: string;
    prompt: string;
    author: {
        _id: string,
        firstName: string,
        lastName: string,
    },
    createdAt: Date;
    updatedAt: Date;
}

export const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicId: { type: URL, required: true },
    securedUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.image || model("Image", ImageSchema);

export default Image;