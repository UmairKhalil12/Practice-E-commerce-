// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as products from '../../../public/static/data/products.json';

import { getAll } from "../../../public/services/products"

export default function handler(req, res) {
  const products  = getAll();
  res.status(200).json(products)
}
