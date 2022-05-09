import {Component, OnInit} from '@angular/core';
import {PaymentMethodService} from "../services/payment-method.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Payment from "../models/Payment";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  items: MenuItem[];
  paymentMethod: FormGroup;
  paymentMethodes: Payment[] = [];

  constructor(private paymentService: PaymentMethodService,
              private fb: FormBuilder,
              private router: Router) {
    this.paymentMethod = this.buildForm();
  }

  ngOnInit(): void {
    this.paymentMethodes = this.paymentService.paymentMethodes;
    this.setMenu();
  }

  addMethod() {
    this.paymentService.addPaymentMethod(this.paymentMethod.get('name').value);
    this.paymentMethod.reset();
  }

  edit(index: number) {
    //todo
  }

  delete(index: number) {
    this.paymentService.delete(index)
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
      },
      {
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.router.navigate(["/twoje_wydatki/typ_zakupów"])
        },
      }
    ];
  }

  private buildForm() {
    return this.paymentMethod = this.fb.group({
      name: ['', [Validators.required]]
    })
  }
}
