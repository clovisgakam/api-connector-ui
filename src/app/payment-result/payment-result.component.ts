import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.css']
})
export class PaymentResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  returnToTpp() {
    window.location.href = 'http://localhost:4000/payment/2322';
  }
}
