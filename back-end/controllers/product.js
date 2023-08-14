import productService from '../services/product.js';

async function getProductList(req, res) {
  try {
    const {videoId} = req.params;
    if (!videoId) res.status(400).json({error: 'Bad Payload'});
    else {
      const products = await productService.getProductList(videoId);
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function postProduct(req, res) {
  try {
    const {linkProduct, title, price, imageURL} = req.body;
    const {videoId} = req.params;

    if (!linkProduct || !title || !price || !imageURL || !videoId) {
      res.status(400).json({error: 'Bad Payload'});
    } else {
      const product = await productService.addProduct({
        linkProduct,
        title,
        price,
        imageURL,
        videoId
      });

      res.status(201).json({message: `product successfully created`, product});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export default {
  getProductList,
  postProduct
};
