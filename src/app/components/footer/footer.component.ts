import { Component, inject } from '@angular/core';
import { RecepiesService } from '../../service/recepies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public recepiServise = inject(RecepiesService)

  ngOnInit(): void {
    this.recepiServise.getRecipes()
  }

}
