import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentService} from '../payment/payment.service';
import {ConsentService} from './consent.service';
import {UrlHolderService} from '../shared/url-holder.service';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  dataSet = [];
  isLoading = false ;
  constructor(private router: Router,
              private paymentService: PaymentService,
              private consentService: ConsentService,
              private url: UrlHolderService) {
  }

  ngOnInit() {
    if (this.url.redirectUrl) {
      this.paymentService.getPayment(this.url.consentId)
        .subscribe(resp => {
            this.dataSet = [resp];
          },
          error1 => console.log(error1));
    } else {
      this.consentService.getConsent(this.url.consentId)
        .subscribe(resp => {
            console.log(resp);
          },
          error1 => console.log(error1));
    }
  }

  saveConsent(consent: boolean) {
    this.isLoading = true;
    setTimeout(_ => {
      this.paymentService.validate(this.url.consentId, consent)
        .subscribe(resp => {
            console.log(resp);
            this.router.navigateByUrl('consent/:id/tan');
          },
          error1 => {
          console.log(error1);
          }, () =>  this.isLoading = false);
    }, 5000);
  }
}
