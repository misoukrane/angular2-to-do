import { Component, bootstrap, Input, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { Todo } from './todo';
import { TodoFormComponent } from './todoFormComponent';
import { TodolistComponent } from './todolist';
import { TodoService } from './todoService'

@Component({
	selector: 'my-app',
	template:`
		<h1 class="text-center">Angular 2 Todo App</h1>
		<div class="col-md-10 col-md-offset-1 hide" [class.hide]="editing">
			<todo-list [todoService]="todoService" (edit)="onEdit($event)"></todo-list>
		</div>
		<div class="row">
			<todo-form [todoService]="todoService" [model]="todo" [index]="index" (save)="onSave()"></todo-form>
		</div>
	`,
	directives:[CORE_DIRECTIVES, FORM_DIRECTIVES, TodoFormComponent, TodolistComponent]
})
class AppComponent {
	public todoService: TodoService;
	public todo: Todo;
	public index: number;
	public editing: boolean;
	
	public constructor(todoService: TodoService) {
		this.todoService = todoService;
		this.todo = new Todo();
		this.index = -1;
		this.editing = false;
	}
	
	onEdit(event) {
		this.todo = event.todo; 
		this.index = event.index;
		this.editing = true;
	}
	
	onSave() {
		this.todo = new Todo(); 
		this.index = -1;
		this.editing = false;
	}
}
bootstrap(AppComponent, [TodoService]);