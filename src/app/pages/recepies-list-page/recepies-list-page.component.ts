import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecepiesService } from '../../service/recepies.service';
@Component({
  selector: 'app-recepies-list-page',
  imports: [],
  templateUrl: './recepies-list-page.component.html',
  styleUrl: './recepies-list-page.component.css'
})
export class RecepiesListPageComponent implements OnInit {
  public recepiServise = inject(RecepiesService)

  ngOnInit(): void {
    this.recepiServise.getRecipes()
  }

}
