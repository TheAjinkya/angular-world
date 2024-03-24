import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyField, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Contact } from 'src/model/contact.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  loginForm = new FormGroup({});
  // model = {};
  options: FormlyFormOptions = {formState:{
    awesomeIsForced: false
  }}
  model = { firstName: 'Ajinkya', lastName: 'Chanshetty', email: 'ab@gm.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      defaultValue:'Ajinkya 2',
      props: {
        label: 'FirstName',
        placeholder: 'Enter FirstName',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        label: 'Last Name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        required: true,
      },
      expressions:{
        'props.disabled': '!model.lastName'
      }
    },
  ];

  onSubmit(model: any) {
    console.log(model);
    console.log(this.options);
  }

  setFormValues(){
    this.model = { firstName: 'Ajinkya', lastName: 'Chanshetty', email: 'ab@gm.com' };
  }
}
