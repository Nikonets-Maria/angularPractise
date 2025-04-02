import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecepItemResponse } from './recipe/recipe.item.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {
  private baseUrl = 'https://dummyjson.com'
  public recepList: RecepItemResponse[] = [] 

  constructor(private httpClient: HttpClient) {}

  public getRecipes(): void {
    this.httpClient.get<{ recipes: RecepItemResponse[] }>(this.baseUrl + '/recipes')
      .subscribe((data) => {
        this.recepList = data.recipes; 
        // console.log(this.recepList); 
      });
  }

  public getRecipeById(id: number | string): Observable<RecepItemResponse> {
    return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  }

  public getRecipeByComplexity(id: number | string): Observable<RecepItemResponse> {
    return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  }

  public getRecipeByMeal(id: number | string): Observable<RecepItemResponse> {
    return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  }
}
