import  express from "express"
import authUser from "../middlewares/authUser.js"
import { getAllOrder, getUsersOrder, placeOrderCod } from "../controllers/orderController.js"
import authSeller from "../middlewares/authseller.js"

const orderRouter = express.Router()

orderRouter.post('/cod', authUser, placeOrderCod)
orderRouter.get('/user', authUser, getUsersOrder)
orderRouter.get('/seller', authSeller, getAllOrder)

export default orderRouter