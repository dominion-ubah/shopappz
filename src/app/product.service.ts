import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProductList } from './store/product';

@Injectable()
export class ProductService {


  constructor() { }
  // product services
  getProducts() {
    console.log(ProductList);
    return ProductList;
  }

  createProduct(a) {

  }
  updateProduct(i, a) {

  }
  getProduct(id) {

  }
  deleteProduct(i) {

  }



}
