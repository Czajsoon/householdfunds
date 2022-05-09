import {Component, OnInit} from '@angular/core';
import {RecipeRaportService} from "../services/recipe-raport.service";
import {RecipeTypeService} from "../services/recipe-type.service";
import {PaymentMethodService} from "../services/payment-method.service";
import {SumUp} from "../models/SumUp";

@Component({
  selector: 'app-recipe-raport',
  templateUrl: './recipe-raport.component.html',
  styleUrls: ['./recipe-raport.component.scss']
})
export class RecipeRaportComponent implements OnInit {
  withPaymentMethodesData: any;
  sumUpPayments: SumUp = {names: [], totalPrice: []};
  sumUpTypes: SumUp = {names: [], totalPrice: []};
  withTypeData: any;
  private _colors: string[] = [
    "#42A5F5",
    "#66BB6A",
    "#FFA726",
    "#26C6DA",
    "#7E57C2",
    "#8673A1",
    "#C7B446",
    "#6C6960",
    "#D36E70",
    "#31372B",
    "#3B3C36",
    "#2D572C",
    "#5B3A29",
    "#252850",
    "#7E7B52",
    "#9B111E",
    "#317F43",
    "#75151E",
    "#B32428",
    "#1E213D",
    "#E1CC4F",
    "#35682D",
    "#316650",
    "#497E76",
    "#4A192C",
    "#354D73"
  ];
  chartOptions: any;
  totalSpentMoney: number = 2300;
  date: Date = null;


  constructor(private raportService: RecipeRaportService,
              public typeService: RecipeTypeService,
              public paymentService: PaymentMethodService) {
  }

  ngOnInit(): void {
    this.setUpPaymentChart();
    this.setUpTypeChart();
    this.date = this.raportService.date;
    this.sumUpPayments.names = this.paymentService.paymentMethodes.map(method => method.name.toString())
    this.sumUpPayments.totalPrice = this.raportService.paymentNumbers;
    this.sumUpTypes.names = this.typeService.types.map(type => type.name.toString());
    this.sumUpTypes.totalPrice = this.raportService.typeNumbers;
  }

  private setUpPaymentChart() {
    this.withPaymentMethodesData = {
      datasets: [{
        data: [...this.raportService.paymentNumbers],
        backgroundColor: this._colors,
      }],
      labels: [...this.paymentService.paymentMethodes.map(method => method.name.toString())]
    };
  }

  private setUpTypeChart() {
    this.withTypeData = {
      datasets: [{
        data: [...this.raportService.typeNumbers],
        backgroundColor: this._colors,
      }],
      labels: [...this.typeService.types.map(type => type.name.toString())]
    };
  }

}
