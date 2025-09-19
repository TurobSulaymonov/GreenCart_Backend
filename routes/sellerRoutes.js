import express from 'express'
import { isSellerAuth, sellerLogin, sellerLogout, } from '../controllers/sellerControler.js';
import authSeller from '../middlewares/authseller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get("is-auth", authSeller, isSellerAuth);
sellerRouter.get("logout", sellerLogout)

export default sellerRouter; 