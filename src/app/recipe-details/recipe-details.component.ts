import {AfterContentInit, Component, OnInit} from '@angular/core';
import {RecipeDetailService} from "../services/recipe-detail.service";
import Recipe from "../models/Recipe";
import Payment from "../models/Payment";
import Numbers from "../models/Numbers";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {PaymentMethodService} from "../services/payment-method.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public paymentMethod: Payment[] = [];
  public sums: Numbers[] = [];
  public recipe: Recipe = null;

  constructor(private recipeService: RecipeDetailService,
              private paymentMethodService: PaymentMethodService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setAll();
  }

  private setAll(){
    this.paymentMethod = this.paymentMethodService.paymentMethodes
    this.recipe = this.recipeService.recipe;
    this.loadSums();
  }

  loadSums() {
    for (let i = 0; i < this.recipe.items.length; i++) {
      this.sums.push({
        sum: this.recipe.items[i].quantity * this.recipe.items[i].product.price,
        price: null,
        quantity: null
      })
    }
  }

  modelChangeFn(e, index: number, name: string) {
    if (name == "price")
      this.recipe.items[index].product.price = e;
    else
      this.recipe.items[index].quantity = e;
    if (this.recipe.items[index].quantity !== null && this.recipe.items[index].product.price !== null)
      this.sums[index].sum = this.recipe.items[index].product.price * this.recipe.items[index].quantity;
  }

  deleteProduct(index: number) {

    if (this.recipeService.recipe.items.length === 1) {
      this.recipe.items.pop();
      this.sums.pop();
    } else if (this.recipeService.recipe.items.length > 1) {
      this.recipe.items.splice(index, 1)
      this.sums.splice(index,1);
    }
  }

  addProduct() {
    this.recipe.items.push({quantity: null, product: {name: "", price: null}})
    this.sums.push({price: 0, quantity: 0, sum: 0})
  }

  save(date){
    setTimeout(()=>{
      this.recipeService.save(date);
    },100)
    this.router.navigate(["/twoje_wydatki"])
  }
}
