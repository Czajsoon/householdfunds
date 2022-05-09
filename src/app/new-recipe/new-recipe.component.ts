import {Component, OnInit} from '@angular/core';
import {RecipeDetailService} from "../services/recipe-detail.service";
import Recipe, {Item} from "../models/Recipe";
import Payment from "../models/Payment";
import Numbers from "../models/Numbers";
import {PaymentMethodService} from "../services/payment-method.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  // @ts-ignore
  public recipe: Recipe;
  public paymentMethod: Payment[];
  public items: Item[] = [];
  public sums: Numbers[] = [];
  itemsMenu: MenuItem[];

  constructor(public recipeService: RecipeDetailService,
              private router: Router,
              private paymentMethodService: PaymentMethodService) {
  }

  ngOnInit(): void {
    this.paymentMethod = this.paymentMethodService.paymentMethodes;
    this.setMenu();
  }

  modelChangeFn(e, index: number, name: string) {
    if (name == "price")
      this.sums[index].price = e;
    else
      this.sums[index].quantity = e;
    if (this.items[index].quantity !== null && this.items[index].product.price !== null)
      this.sums[index].sum = this.sums[index].price * this.sums[index].quantity;
  }

  deleteProduct(index: number) {
    if (this.items.length === 1) {
      this.items.pop();
    } else if (this.items.length > 1) {
      this.items.splice(index, 1)
    }
  }

  addRecipe(date: string) {
    setTimeout(() => {
      this.recipeService.addRecipe(date)
    },100);
    this.router.navigate(["/twoje_wydatki"])
  }

  addProduct() {
    this.items.push({quantity: null, product: {name: "", price: null}})
    this.sums.push({sum: 0, price: 0, quantity: 0});
  }

  private setMenu() {
    this.itemsMenu = [
      {
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(["/twoje_wydatki"])
        },
      },
      {
        icon: 'pi pi-shopping-cart',
        tooltip: "Dodaj formę płatności",
        command: () => {
          this.router.navigate(["/twoje_wydatki/typ_zakupów"])
        },
      },
      {
        icon: 'pi pi-wallet',
        command: () => {
          this.router.navigate(["/twoje_wydatki/forma_płatości"])
        },
      }
    ];
  }
}
