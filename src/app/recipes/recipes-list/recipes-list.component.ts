import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes : Recipes[] = [
    new Recipes ('a test name','a test desc' , 'https://c.ndtvimg.com/2022-03/j5jbs6g_khichdi_625x300_25_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384'),

    new Recipes ('a test name','a test desc' , 'https://c.ndtvimg.com/2022-03/j5jbs6g_khichdi_625x300_25_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384')
  ]

}
