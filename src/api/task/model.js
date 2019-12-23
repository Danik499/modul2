import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    x1: Number,
    y1: Number,
    x2: Number,
    y2: Number,
    x3: Number,
    y3: Number
})

const taskModel = model("accounting", taskSchema);

export default taskModel;