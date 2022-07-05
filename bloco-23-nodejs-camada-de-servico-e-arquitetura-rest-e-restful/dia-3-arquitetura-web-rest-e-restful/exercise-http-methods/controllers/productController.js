const express = require('express');
const ProdModel = require('../models/productModel');

const router = express.Router();

router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ProdModel.getById(id);
  res.status(200).json(product);
});

router.get('/products', async (req, res) => {
  const products = await ProdModel.getAll();
  res.status(200).json(products);
});

router.post ('/products', async (req, res) => {
  const { name, brand } = req.body;
  const newProd = await ProdModel.add(name, brand);
  res.status(200).json(newProd);
});

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await ProdModel.exclude(id);
  res.status(200).json({ message: 'Delete success!'});
});

router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  const prod = await ProdModel.update(id, name, brand);
  res.status(200).json(prod);
});

module.exports = router;