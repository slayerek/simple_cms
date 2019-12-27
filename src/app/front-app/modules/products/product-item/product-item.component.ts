import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../models/product.model';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

    private prodUrl: string;
    public product: Product;

    constructor(private route: ActivatedRoute, private products: ProductsService) {

        route.params.subscribe(res => {
            this.prodUrl = res['id'];
        }
        )

    }

    ngOnInit() {

        if (this.prodUrl != '') {
            this.products.getSingleProduct(this.prodUrl).subscribe(
                res => {
                    this.product = res;
                }
            );
        }

    }


}
