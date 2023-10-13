import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency-exchange.service';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css'],

})
export class CurrencyExchangeComponent implements OnInit {
  currentDate: string = '';
  currencies: any[] = [];
  secondTableCurrencies: any[]=[];
  thirdTableCurrencies: any[] = [];
  // displayedColumns: string[] = ['kurs_type_description', 'kurs_type', 'kurs_date', 'name', 'short_name', 'code', 'kurs',
  //   'forc_kurs', 'kurs_buy', 'kurs_sale', 'kurs_sale_uah', 'kurs_buy_uah', 'start_time'];
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(data => {
      if (Array.isArray(data)) {
        this.currencies = data.slice(0, 5);
        this.secondTableCurrencies = data.slice(6, 18);
        console.log(this.currencies);
        console.log(this.secondTableCurrencies);
      }
    });
    this.currencyService.getCurrencies1().subscribe(data => {
      if (Array.isArray(data)){
        this.thirdTableCurrencies = data.slice(0, 9);
        console.log(this.thirdTableCurrencies);
      }
    })
    const now = new Date();
    this.currentDate = format(now, "eeee, d MMMM yyyy рік, HH:mm:ss", { locale: uk });

  }
}
