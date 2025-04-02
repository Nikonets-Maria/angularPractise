import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepiesService } from '../../service/recepies.service';
import { RecepItemResponse } from '../../service/recipe/recipe.item.service';

@Component({
  selector: 'app-recepies-item-page',
  imports: [],
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

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id']
    this.recepiService.getRecipeById(productId)
      .subscribe({
        // случай если запрос успеншо выполнится
        next: (data) => {
          this.recepItem = data
        },
        // случай если запрос вернет ошибку
        error: (error) => {
          // что делать если будет ошибка .....
          // Навигация до домашней страницы
          this.router.navigate([''])
          alert('error')

          // Методы для вперед/назад
          // this.location.forward()
          // this.location.back()
        }
      })

}

}
