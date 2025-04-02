import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecepiesService } from '../../service/recepies.service';
import { RecepItemResponse } from '../../service/recipe/recipe.item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recepies-item-page',
  imports: [RouterModule],
  templateUrl: './recepies-item-page.component.html',
  styleUrl: './recepies-item-page.component.css'
})
export class RecepiesItemPageComponent {
  public recepItem: RecepItemResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public recepiService: RecepiesService
  ) { }

  public goBack(): void{
    this.location.back()
  }
  
  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id']
    this.recepiService.getRecipeById(recipeId)
      .subscribe({
        next: (data) => {
          this.recepItem = data
        },
        error: (error) => {
          this.router.navigate([''])
        }
      })

}

}
