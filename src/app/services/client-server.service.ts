import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mapTo, pairwise, switchMap } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ClientServerService {
  private url = 'http://localhost:2403/products';
  private testUrl = 'http://localhost:2403/words';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url).pipe(
      map((products: any) => {
        const newProducts = products.map((product) => {
          return { ...product, quantity: 1 };
        });
        return newProducts;
      })
    ) as Observable<Product[]>;
  }
  getProduct(id): Observable<Product> {
    return this.http.get(`${this.url}/${id}`) as Observable<Product>;
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post(this.url, product) as Observable<Product>;
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put(`${this.url}/${id}`, product) as Observable<Product>;
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete(`${this.url}/${id}`) as Observable<null>;
  }

  testMethod1() {
    return forkJoin([this.getProducts(), this.http.get(this.testUrl)]).pipe(
      map(([products, words]: any[]) => {
        const retObj = [...products, ...words];
        return products.concat(words);
      })
    );
  }
  testMethod2() {
    return this.getProducts()
      .pipe(pairwise())
      .pipe(
        map((pair) => {
          console.log(pair);
          return pair;
        })
      );
  }
  testMethod3() {}
  testMethod4() {}

  checkPermission(valid: boolean): boolean {
    return valid;
  }
}
