import {Injectable} from '@angular/core';
import {Slider} from '../models/slider.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HelpersService} from './helpers.service';

@Injectable({
    providedIn: 'root'
})
export class SlidersService {

    private apiUrl: string = 'http://laravelapi.tescik.ovh/slides';

    constructor(private http: HttpClient, private helpers: HelpersService) {}

    public getSlides(): Observable<Slider[]> {

        return this.http.get<Slider[]>(this.apiUrl).pipe(
            map(
                slides => {
                    return slides.map(
                        slide => {
                            return new Slider(
                                slide['id'],
                                slide['name'],
                                slide['url'],
                                slide['details'],
                                slide['image'],
                            )
                        }
                    )

                }
            )
        );

    }

}
