import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      email: '',
      address: fb.array([])
    });
  }

  ngOnInit() {}

  get getAddress(): FormArray {
    return this.myForm.get('address') as FormArray;
  }

  addNewAddress() {
    this.getAddress.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  removeAddress(index) {
    this.getAddress.removeAt(index);
  }
}
