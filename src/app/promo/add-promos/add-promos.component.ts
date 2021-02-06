import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-add-promos',
  templateUrl: './add-promos.component.html',
  styleUrls: ['./add-promos.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddPromosComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      Description: ['', Validators.required],
      AgateRef: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
