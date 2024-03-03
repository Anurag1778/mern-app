import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import {
  createOrderController,
  getMyOrdersCotroller,
  paymetsController,
  singleOrderDetrailsController,
} from "../controllers/orderController.js";
const router = express.Router();

//rroutes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersCotroller);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetrailsController);

// acceipt payments
router.post("/payments", isAuth, paymetsController);

// ====================================================================

export default router;
