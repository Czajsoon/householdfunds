import {Injectable} from '@angular/core';
import Payment from "../models/Payment";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private _paymentMethod: Payment[] = [
    {name: "Gotówka", fromSystem: true},
    {name: "Przelew", fromSystem: true}
  ];

  constructor(private messageService: MessageService) {
  }

  get paymentMethodes() {
    return this._paymentMethod;
  }

  delete(index:number){
    this.paymentMethodes.splice(index,1);
  }

  addPaymentMethod(name: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Dodano',
      detail: 'Pomyślnie dodano metodę płatności: ' + name + "!"
    });
    this._paymentMethod.push({name: name, fromSystem: false})
  }
}
