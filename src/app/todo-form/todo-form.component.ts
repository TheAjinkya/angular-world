import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = { tasks: [null] };
  fields: FormlyFieldConfig[] = [
    {
      key: 'taskName',
      type: 'input',
      props: {
        label: 'Task Name',
      },
    },
  ];

  onSubmit() {
    console.log(this.model);
    console.log(this.options.formState);
  }
}
