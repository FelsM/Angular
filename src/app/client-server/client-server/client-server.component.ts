import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ClientServerService } from 'src/app/services/client-server.service';

@Component({
  selector: 'app-client-server',
  templateUrl: './client-server.component.html',
  styleUrls: ['./client-server.component.css'],
})
export class ClientServerComponent implements OnInit {
  addProductForm: FormGroup;
  products: Product[] = [];

  constructor(
    private ciletServerService: ClientServerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: '',
      price: 0,
      available: false,
    });
    this.ciletServerService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
    this.ciletServerService.testMethod1().subscribe((res) => {
      console.log(res);
    });
  }

  addProduct() {
    this.ciletServerService
      .addProduct(this.addProductForm.value)
      .subscribe((product) => {
        this.products = [...this.products, product];
        this.addProductForm.reset();
      });
  }

  delete(id: string) {
    this.ciletServerService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
