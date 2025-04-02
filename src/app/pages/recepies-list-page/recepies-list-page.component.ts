
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RecepiesService } from '../../service/recepies.service';
import { RecepItemResponse } from '../../service/recipe/recipe.item.service';
@Component({
selector: 'app-recepies-list-page',
imports: [RouterLink, RouterLinkActive],
templateUrl: './recepies-list-page.component.html',
styleUrl: './recepies-list-page.component.css'
})

export class RecepiesListPageComponent implements OnInit {
public recepiServise = inject(RecepiesService);
public recepItem: RecepItemResponse[];
public currentComplexity: string;
public currentMealType: string;

constructor(
private route: ActivatedRoute,
private router: Router,
public recepiService: RecepiesService
) {}

ngOnInit(): void {
this.recepiServise.getRecipes();
this.route.params.subscribe(params => {
this.currentComplexity = params['complexity'];
this.currentMealType = params['mealType']; // Получаем тип приема пищи из параметров маршрута
this.recepItem = this.recepiServise.filterRecipesByComplexity(this.currentComplexity);
this.recepItem = this.recepiServise.filterRecipesByMealType(this.currentMealType); // Применяем фильтрацию по виду приема пищи
});
}
}



// export class RecepiesListPageComponent implements OnInit {
//   public recepiServise = inject(RecepiesService)
//   public recepItem: RecepItemResponse;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     // private location: Location,
//     public recepiService: RecepiesService
//   ) { }
//   ngOnInit(): void {
//     this.recepiServise.getRecipes()
//   }

  


  // public getRecipeByComplexity(id: number | string): Observable<RecepItemResponse> {
  //   return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  // }

  // public getRecipeByMeal(id: number | string): Observable<RecepItemResponse> {
  //   return this.httpClient.get<RecepItemResponse>(this.baseUrl + `/recipes/${id}`);
  // }
  
//   ngOnInit(): void {
//     const recipeId = this.route.snapshot.params['id']
//     this.recepiService.getRecipeById(recipeId)
//       .subscribe({
//         next: (data) => {
//           // this.recepList = data.recipes; 
//           this.recepiServise.recepList = data;
//         },
//         error: (error) => {
//           this.router.navigate([''])

//           // Методы для вперед/назад
//           // this.location.forward()
//           // this.location.back()
//         }
//       })

// }


