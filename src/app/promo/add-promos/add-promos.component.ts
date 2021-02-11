import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';


// @ts-ignore
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
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      Description: ['', Validators.required],
      AgateRef: ['', Validators.required],
      Titre: ['', Validators.required],
      lieu: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

}
