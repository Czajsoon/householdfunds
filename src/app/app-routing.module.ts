import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {RegisterComponent} from "./register/register.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {NewRecipeComponent} from "./new-recipe/new-recipe.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {RecipeTypesComponent} from "./recipe-types/recipe-types.component";
import {RecipeRaportComponent} from "./recipe-raport/recipe-raport.component";

const routes: Routes = [
  {path: "", redirectTo: "/strona_domowa", pathMatch: "full"},
  {path: "strona_domowa", component: HomeComponent},
  {path: "logowanie", component: LoginComponent},
  {path: "kontakt", component: ContactComponent},
  {path: "twoje_wydatki", component: DashboardComponent},
  {path: "ustawienia", component: SettingsComponent},
  {path: "rejestracja", component: RegisterComponent},
  {path: "twoje_wydatki/paragon", component: RecipeDetailsComponent},
  {path: "twoje_wydatki/nowy-paragon", component: NewRecipeComponent},
  {path: "twoje_wydatki/forma_płatości", component: PaymentMethodComponent},
  {path: "twoje_wydatki/typ_zakupów", component: RecipeTypesComponent},
  {path: "twoje_wydatki/raport", component: RecipeRaportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
