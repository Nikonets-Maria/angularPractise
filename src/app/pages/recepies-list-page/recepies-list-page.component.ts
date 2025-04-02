
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RecepiesService } from '../../service/recepies.service';
import { RecepItemResponse } from '../../service/recipe/recipe.item.service';

@Component({
  selector: 'app-recepies-list-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recepies-list-page.component.html',
  styleUrls: ['./recepies-list-page.component.css']
})
export class RecepiesListPageComponent implements OnInit {
  public recepiServise = inject(RecepiesService);
  public recepItem: RecepItemResponse[];
  public currentComplexity: string = 'all'; 
  public currentMealType: string = 'breakfast'; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public recepiService: RecepiesService
  ) {}

  ngOnInit(): void {
    this.recepiServise.getRecipes();
    
    this.route.params.subscribe(params => {
      this.currentComplexity = params['complexity'] || 'all';
      this.currentMealType = params['mealType'] || 'breakfast';
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.recepItem = this.recepiServise.filterRecipesByComplexity(this.currentComplexity);

    this.recepItem = this.recepiServise.filterRecipesByMealType(this.currentMealType);
      
  }

  onComplexityChange(complexity: string): void {
    this.currentComplexity = complexity;
    this.router.navigate(['/', this.currentMealType, complexity]);
    this.applyFilters();
  }

  onMealTypeChange(mealType: string): void {
    this.currentMealType = mealType;
    this.router.navigate(['/', mealType, this.currentComplexity]);
    this.applyFilters();
  }
}

// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { RecepiesService } from '../../service/recepies.service';
// import { RecepItemResponse } from '../../service/recipe/recipe.item.service';
// @Component({
// selector: 'app-recepies-list-page',
// imports: [RouterLink, RouterLinkActive],
// templateUrl: './recepies-list-page.component.html',
// styleUrl: './recepies-list-page.component.css'
// })

// export class RecepiesListPageComponent implements OnInit {
// public recepiServise = inject(RecepiesService);
// public recepItem: RecepItemResponse[];
// public currentComplexity: string;
// public currentMealType: string;

// constructor(
// private route: ActivatedRoute,
// private router: Router,
// public recepiService: RecepiesService
// ) {}

// ngOnInit(): void {
// this.recepiServise.getRecipes();
// this.route.params.subscribe(params => {
// this.currentComplexity = params['complexity'];
// this.currentMealType = params['mealType']; // Получаем тип приема пищи из параметров маршрута
// this.recepItem = this.recepiServise.filterRecipesByComplexity(this.currentComplexity);
// this.recepItem = this.recepiServise.filterRecipesByMealType(this.currentMealType); // Применяем фильтрацию по виду приема пищи
// });
// }
// }



