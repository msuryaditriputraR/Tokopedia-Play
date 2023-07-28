import productService from '../services/product.js';

async function getProductList(req, res) {
  try {
    const {videoId} = req.body;
    if (!videoId) res.status(400).json({error: 'Bad Payload'});
    else {
      const products = await productService.getProductList(videoId);

      if (products.length <= 0) {
        res.status(404).json({error: 'videoId not found'});
      } else {
        res.status(200).json(products);
      }
    }
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
}

export default {
  getProductList
};
