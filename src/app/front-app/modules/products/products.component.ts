import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public productsView: Product[];
    public numberOfPages: number[];
    private configProducstNumber: number = environment.productsNumber;

    constructor(private productsSerivce: ProductsService) {}

    ngOnInit() {

        this.productsSerivce.getProducts().subscribe(
            products => {
                this.numberOfPages = this.getNumberOfPages(products);
            }
        );//first load - get number of products pages - need that to pagination

        this.updatePaginatedProducts(0);//set products at firts load - need that to pagination

        this.productsSerivce.productsData.subscribe(
            products => {
                this.productsView = products;
            }
        );//update products when someone click pagination button number

    }

    public choosePage(pageNumber: number) {
        this.updatePaginatedProducts(pageNumber);
    }

    private getNumberOfPages(products: Product[]) {
        return new Array(Math.ceil(products.length / this.configProducstNumber));
    }//generate and get number of pages - need that to pagination

    private updatePaginatedProducts(page: number) {
        this.productsSerivce.getProducts().subscribe(products => {
            const productsNewArr = products.slice(page * this.configProducstNumber, this.configProducstNumber + (page * this.configProducstNumber));
            this.productsSerivce.productsData.next(productsNewArr);
        });
    }

}
