import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Furniture from '../models/model';

const createFurnUrl = 'http://localhost:5000/furniture/create';
const getAllFurnUrl = 'http://localhost:5000/furniture/all';
const getFurnDetails = 'http://localhost:5000/furniture/details/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(data: any) {
    let asd = this.http.post(createFurnUrl, data);
    console.log(asd);
  }

  getAllFurnitures(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(getAllFurnUrl);
  }

  getDetails(id) {
    return this.http.get<Furniture>(`${getFurnDetails}${id}`);
  }
}
