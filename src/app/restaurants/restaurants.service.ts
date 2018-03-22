import { HttpParams, HttpClient } from '@angular/common/http';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class RestaurantService {
    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().append('q', search);
        }

        // PUBLICADO
        // return this.http.get<Restaurant[]>(`${MEAT_API}/handler/restaurantsDefault.ashx`, { params: params })

        // LOCAL
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
    }

    restaurantById(id: string): Observable<Restaurant> {
        let params: HttpParams = undefined;
        if (id) {
            params = new HttpParams().append('id', id);
        }

        // PUBLICADO
        // return this.http.get<Restaurant>(`${MEAT_API}/handler/restaurants.ashx`, { params: params })

        // LOCAL
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        let params: HttpParams = undefined;
        if (id) {
            params = new HttpParams().append('id', id);
        }

        // PUBLICADO
        // return this.http.get(`${MEAT_API}/handler/reviews.ashx/${id}/reviews`, { params: params })

        // LOCAL
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);

    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        let params: HttpParams = undefined;
        if (id) {
            params = new HttpParams().append('id', id);
        }

        // PUBLICADO
        // return this.http.get<MenuItem[]>(`${MEAT_API}/handler/menu.ashx/${id}/menu`, { params: params });

        // LOCAL
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }

}
