import Router from "express";
import Controller from "./controller";

const router = new Router();

router.post("/", Controller.post);


export default router;