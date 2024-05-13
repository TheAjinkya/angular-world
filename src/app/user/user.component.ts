import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users$: Observable<any> | undefined
  
  constructor(private store : Store) {
    this.users$ = store.select((state: any) => state.user)
    console.log("users", this.users$)
  }

  addUser(name:any, userId:any) {
    this.store.dispatch({type:'ADD_USER', payload: {name: name, userId: userId}})
  }

}
