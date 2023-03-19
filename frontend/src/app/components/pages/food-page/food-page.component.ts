import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent {
  food!: Food;
  constructor(activeRoute: ActivatedRoute, foodService: FoodService) {
    activeRoute.params.subscribe((params) => {
      if (params.id) this.food = foodService.getAllFoodById(params.id);
    });
  }
}
