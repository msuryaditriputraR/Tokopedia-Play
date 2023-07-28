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

async function postProduct(req, res) {
  try {
    const {linkProduct, titleProduct, priceProduct, videoId} = req.body;

    if (!linkProduct || !titleProduct || !priceProduct || !videoId) {
      res.status(400).json({error: 'Bad Payload'});
    } else {
      const id = await productService.addProduct({
        linkProduct,
        titleProduct,
        priceProduct,
        videoId
      });

      res
        .status(201)
        .json({message: `product successfully created with id = ${id}`});
    }
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
}

export default {
  getProductList,
  postProduct
};
