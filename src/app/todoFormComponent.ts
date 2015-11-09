import {Component, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, Input, Output} from 'angular2/angular2';
import { Todo } from './todo';
import { TodoService } from './todoService';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/todoFormComponent.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TodoFormComponent {
	@Input() todoService: TodoService;
	@Input() model:Todo;
	@Input() index:number;
	@Output() save = new EventEmitter();
	public submitted: boolean;
	
	public constructor(todoService: TodoService) {
		this.todoService = todoService;
		this.submitted = false;
	}
	
	public onSubmit() {
		this.submitted = true;
		if (this.index == -1) {
			this.todoService.addTodo(this.model);	
		} else {
			this.todoService.saveTodo(this.model, this.index);
		}
		this.submitted = false;
		this.save.next({});
	}
}