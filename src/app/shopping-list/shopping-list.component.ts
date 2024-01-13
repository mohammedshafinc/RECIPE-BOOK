import { Component } from '@angular/core';
import { ingrediants } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingrediants:ingrediants [] = [
    new ingrediants("apple",500),
    new ingrediants("tomato",100)
  ]

}
