import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Type from "../models/Type";
import {RecipeTypeService} from "../services/recipe-type.service";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-types',
  templateUrl: './recipe-types.component.html',
  styleUrls: ['./recipe-types.component.scss']
})
export class RecipeTypesComponent implements OnInit {
  typeGroup: FormGroup;
  types: Type[] = [];
  items: MenuItem[];

  constructor(private recipeTypesService: RecipeTypeService,
              private fb: FormBuilder,
              private router: Router) {
    this.typeGroup = this.buildForm();
  }

  ngOnInit(): void {
    this.types = this.recipeTypesService.types;
    this.setMenu();
  }

  private buildForm() {
    return this.typeGroup = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  private setMenu() {
    this.items = [
      {
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(["/twoje_wydatki"])
        },
      },
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
    ];
  }

  addType() {
    this.recipeTypesService.addType(this.typeGroup.get('name').value);
  }

  delete(index: number) {
    this.recipeTypesService.delete(index);
  }
}
