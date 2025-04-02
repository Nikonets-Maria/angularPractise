import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecepItemResponse } from './recipe/recipe.item.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {
  private baseUrl = 'https://dummyjson.com'
  public standartrecepList: RecepItemResponse[] = [] 
  public recepList: RecepItemResponse[] = [] 

  constructor(private httpClient: HttpClient) {}

  public getRecipes(): void {
    this.httpClient.get<{ recipes: RecepItemResponse[] }>(this.baseUrl + '/recipes')
      .subscribe((data) => {
        this.recepList = data.recipes; 
        this.standartrecepList = data.recipes; 
        // console.log(this.recepList); 
      });
  }

  public getRecipeById(id: number | string): Observable<RecepItemResponse> {
    return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  }

  public filterRecipesByComplexity(complexity: string): RecepItemResponse[] {
    if (complexity === 'all') {
      // console.log('all')
      // console.log(this.recepList.length)
      this.recepList = this.standartrecepList
      return this.recepList; 
    } 
    else if(complexity === 'easy') {
      this.recepList = this.standartrecepList

      // console.log('easy')
      // console.log(this.recepList.filter(recipe => recipe.difficulty.toLowerCase() === 'easy').length)
      this.recepList = this.recepList.filter(recipe => recipe.difficulty.toLowerCase() === 'easy');
      return this.recepList
    } 
    else {
      this.recepList = this.standartrecepList

      // console.log('medium')
      // console.log(this.recepList.filter(recipe => recipe.difficulty.toLowerCase() === 'medium').length)

      this.recepList = this.recepList.filter(recipe => recipe.difficulty.toLowerCase() === 'medium');
      return this.recepList
    } 
}

public filterRecipesByMealType(mealType: string): RecepItemResponse[] {
  if (mealType === 'breakfast') {
    this.recepList = this.standartrecepList

    this.recepList = this.recepList.filter(recipe => 
      recipe.mealType.includes('Breakfast') );
    return this.recepList;
  
  }
  else if (mealType === 'dinner') {
    this.recepList = this.standartrecepList

    this.recepList = this.recepList.filter(recipe => 
      recipe.mealType.includes('Dinner') );
    return this.recepList;
  
}
  else if (mealType === 'lunch') {
    this.recepList = this.standartrecepList

    this.recepList = this.recepList.filter(recipe => 
      recipe.mealType.includes('Lunch') );
    return this.recepList;

}
else {
  return this.recepList;}
  
}



}
