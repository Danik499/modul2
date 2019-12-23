import { Router } from "express";
import router from "./task";

const apiRouter = new Router();

apiRouter.use("/", router);

export default apiRouter;