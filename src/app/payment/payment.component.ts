import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {st} from '@angular/core/src/render3';
import {PaymentService} from './payment.service';
import {UrlHolderService} from '../shared/url-holder.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  validateForm: FormGroup;
  isLoading = false;
  tan: number ;

  constructor(private fb: FormBuilder, private router: Router,
              private paymentService: PaymentService,
              private consentHolder: UrlHolderService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      tan: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }


  execute() {
    this.isLoading = true;
    setTimeout(_ => {
      this.isLoading = false;
      this.paymentService.execute(this.consentHolder.consentId, this.tan)
        .subscribe(resp => {
            console.log(resp);
            this.router.navigateByUrl('consent/:id/result');
          },
          error1 => console.log(error1),
          () =>   this.isLoading = false)
        ;
    }, 3000);
  }
}
