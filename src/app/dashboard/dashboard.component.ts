import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import Payment from "../models/Payment";
import Recipe from "../models/Recipe";
import {RecipeDetailService} from "../services/recipe-detail.service";
import {Router} from "@angular/router";
import {PaymentMethodService} from "../services/payment-method.service";
import Type from "../models/Type";
import {RecipeTypeService} from "../services/recipe-type.service";
import {RecipeRaportService} from "../services/recipe-raport.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  daysGone: number;
  monthPayed: number = 1200;
  displayModal: boolean;
  lastMonthPayed: number = 3400;
  items: MenuItem[];
  paymentMethod: Payment[];
  types: Type[];
  pickedDate: Date;
  recipes: Recipe[];
  totalRecords: number;

  constructor(private recipeDetails: RecipeDetailService,
              private confirmationService: ConfirmationService,
              private paymentMethodService: PaymentMethodService,
              private typeService: RecipeTypeService,
              private messageService: MessageService,
              private recipeRaportService: RecipeRaportService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setAll();
  }

  private setAll() {
    this.recipes = this.recipeDetails.recipes;
    this.daysGone = new Date(Date.now()).getDate();
    this.totalRecords = this.recipes.length;
    this.types = this.typeService.types;
    this.setMenu();
    this.paymentMethod = this.paymentMethodService.paymentMethodes;
  }

  confirmDelete(event: Event, index: number) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: "Tak",
      rejectLabel: "Nie",
      message: 'Jesteś pewien że chcesz usunąć ten paragon?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity: 'success', summary: 'Usunięto', detail: 'Pomyślnie usunięto paragon!'});
        this.recipeDetails.delete(index);
        // this.messageService.add({severity: 'error', summary: 'Błąd', detail: 'Nastąpił nieoczekiwany błąd: kod błędu'});
      },
    });
  }

  private setMenu() {
    this.items = [
      {
        icon: 'pi pi-plus',
        command: () => {
          this.router.navigate(["/twoje_wydatki/nowy-paragon"])
        },
        tooltip: "Dodaj paragon"
      },
      {
        icon: 'pi pi-wallet',
        tooltip: "Dodaj formę płatności",
        command: () => {
          this.router.navigate(["/twoje_wydatki/forma_płatości"])
        },
      },
      {
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.router.navigate(["/twoje_wydatki/typ_zakupów"])
        },
      },
      {
        icon: 'pi pi-briefcase',
        command: () => {
          this.displayModal = true;
        },
      }
    ];
  }

  generateRaport(){
    this.recipeRaportService.date = this.pickedDate;
    this.router.navigate(["/twoje_wydatki/raport"]);
  }

  editRecipe(recipe: Recipe) {
    this.recipeDetails.recipe = recipe;
    // this.router.navigate(["/twoje_wydatki/paragon"]);
    this.router.navigateByUrl("/twoje_wydatki/paragon");

  }

}
