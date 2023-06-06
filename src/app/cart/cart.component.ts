import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  form = this.formBuilder.group({
    name: '',
    address: '',
  });

  registrar(): void {
    this.items = this.cartService.clearCart();
    console.warn('Tu orden fue suministrada', this.form.value);
    this.form.reset();
  }
}
