import express from 'express';
import * as sellerController from './seller.controller.js';

const sellerRouter = express.Router();

sellerRouter.get('/', sellerController.getAllSellers);
sellerRouter.post('/', sellerController.createSeller);
sellerRouter.get('/:id', sellerController.getSellerById);
sellerRouter.get('/email/:email', sellerController.getSellerByEmail);
sellerRouter.put('/:id', sellerController.updateSeller);
sellerRouter.delete('/:id', sellerController.deleteSeller);

export default sellerRouter;