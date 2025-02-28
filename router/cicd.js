import { Router } from "express";
import cicd from "../controller/cicd.js";


const router = Router();


router.get('/cd', cicd.get);


export default router;