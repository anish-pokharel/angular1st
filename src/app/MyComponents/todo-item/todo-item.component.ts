import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit  {
  @Input() todo: Todo;
  // todo: Todo = { sno: 0, title: '',desc:"", active: false }
  constructor(){
    this.todo=this.todo
  }


  ngOnInit():void{}

}
