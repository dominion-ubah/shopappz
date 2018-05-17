import { Component, OnInit, TemplateRef } from '@angular/core';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
public products;
public cart = [];
public checkout = [];
public totalPrice;
// modalRef: BsModalRef;

  constructor(
                private _productService: ProductService,
                // private modalService: BsModalService
              ) { }

  ngOnInit() {
    this.getProducts();
    console.log('cart', this.cart);
  }
  getProducts() {
    this.products = this._productService.getProducts();
    console.log('product', this.products);
  }
  addToCart(item) {
      if (this.checkIfInCart(item)) {
        // alert('Already added to cart');
        return;
      } else {
        this.cart.push(item);
        // alert('added to cart');
        console.log('added to cart', this.cart);
      }

  }
  removeFromCart(item) {
    if (this.checkIfInCart(item)) {
      let itemIndex = this.cart.indexOf(item);
      this.cart.splice(itemIndex, 1);
      // alert('Deleted from cart');
      console.log('deleted from cart', this.cart);
      return;
    } else {
      // alert('Not in Cart');
      return;

    }

}
  inCart (item) {
    return this.checkIfInCart(item);
  }
  checkIfInCart (item) {
    for (let i in this.cart) {
        if (this.cart[i] === item) {
          return true;
        }
    }
    return false;
  }
  checkIfInCheckout (item) {
    for (let i in this.checkout) {
        if (this.checkout[i].id === item.id) {
          return true;
        }
    }
    return false;
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  appendQuantity(item, q) {
    console.log(item, q.value);
    item.quantity = q.value;
    console.log(item);

    if (this.checkIfInCheckout(item)) {
      let a = this.checkout.indexOf(item);
      this.checkout.splice(a, 1);
    }
    this.checkout.push(item);
    this.preCheckout();
    console.log(this.checkout);
  }
  preCheckout() {
    let tpArr = [];
    for ( let i in this.checkout) {
      if (this.checkout) {
        let tp = this.checkout[i].quantity * this.checkout[i].price;
        tpArr.push(tp);
      }
    }
    this.totalPrice = tpArr.reduce(function(acc, val) { return acc + val; });
    console.log('total price: ', this.totalPrice);
  }
  checkOut(i) {
alert(' Checkout checkout to payment and enter shipping details => \n best regards \n ubah ikechkwu dominion ');
  }

}

