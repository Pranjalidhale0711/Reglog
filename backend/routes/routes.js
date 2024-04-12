import express from "express";
import {register,login} from '../functions/auth_routes.js'
import bodyParser from 'body-parser';

const router = express.Router();
router.use(express.json());
router.post("/register",register);
router.post("/login",login);


export default router