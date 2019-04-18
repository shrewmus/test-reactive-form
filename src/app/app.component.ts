import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;

  get rules() {
    return this.myForm.get('rules') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      rules: this.formBuilder.array([])
    })

  }

  addRule() {
    this.rules.push(this.formBuilder.group({
      customUrl:['', {validators: [Validators.required], updateOn:'change'}]
    }));
  }

  removeRule(i) {
    this.rules.removeAt(i);
  }
}
