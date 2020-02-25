import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {HelpersService} from './helpers.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/products';
    public productsData = new BehaviorSubject([]);

    constructor(private http: HttpClient, private router: Router, private helpers: HelpersService) {}

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl).pipe(
            map(
                res => {
                    return res.map(product => {
                        return new Product(
                            product.id,
                            product.name,
                            product.price,
                            product.details,
                            product.url,
                            product.image
                        )
                    });
                }
            )
        )
    }

    public getSingleProduct(url: string): Observable<Product> {
        return this.http.get<Product[]>(this.apiUrl).pipe(
            map(
                res => {

                    const product = this.helpers.findPageByUrl(res, url);

                    if (product !== undefined) {

                        return new Product(
                            product['id'],
                            product['name'],
                            product['price'],
                            product['details'],
                            product['url'],
                            product['image']
                        );
                    }

                    this.router.navigate(['/products/prod-not-found']);

                }
            )
        );

    }

}
