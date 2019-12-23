import { MongoClient, ObjectID } from 'mongodb';
import taskModel from "./model";
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017';
const dbName = 'taskDB';
mongoose.connect(url + '/' + dbName);

const Controler = {
    post: function (req, res) {
        const points = new taskModel(req.body);
        let a = points.x1 * (points.y2 - points.y1) - points.y1 * (points.x2 - points.x1);
        let b = points.x2 * (points.y3 - points.y2) - points.y2 * (points.x3 - points.x2);
        let c = points.x3 * (points.y1 - points.y3) - points.y3 * (points.x1 - points.x3)

        if (a > 0 && b > 0 && c > 0 || a < 0 && b < 0 && c < 0) res.send("Точка належить трикутнику!!!");
        else res.send("Точка не належить трикутнику!!!");
    }
}


export default Controler;