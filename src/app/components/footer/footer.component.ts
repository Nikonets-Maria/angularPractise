import { Component, inject } from '@angular/core';
import { RecepiesService } from '../../service/recepies.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public recepiServise = inject(RecepiesService)

  ngOnInit(): void {
    this.recepiServise.getRecipes()
  }

}
