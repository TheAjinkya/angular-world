import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.maxLength(5)]),
    lastName: new FormControl("",[Validators.required, Validators.minLength(2)]),
    contact: new FormControl("9990900099",[Validators.required, Validators.maxLength(5)]),
    email: new FormControl("abc@gmail.com",[Validators.required, Validators.maxLength(5)]),
  });

  onSubmit(){
    console.log(this.registrationForm.value);
  }
}
