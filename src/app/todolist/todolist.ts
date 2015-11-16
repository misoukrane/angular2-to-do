import {Component, Input, CORE_DIRECTIVES, EventEmitter, FORM_DIRECTIVES, Output} from 'angular2/angular2'
import {Todo, TodoComponent} from '../todo/todo'
import {TodoService} from '../todoService/todoService'

@Component({
	selector: 'todo-list',
	template: `
		<div class="row">
			<to-do  *ng-for="#todo of todos; var index=index" [todo]="todo" [index]="index" (change)="onChange($event)"></to-do>
		</div>
	`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, TodoComponent]
})
export class Todolist {
	@Input() todoService: TodoService;
	@Output() edit = new EventEmitter();
	public todos: Todo[];
	
	public constructor(todoService: TodoService) {
		this.todoService = todoService;
		this.todos = this.todoService.getTodos();
	}
	
	onChange(event) {
		switch(event.type) {
			case 'delete':
				this.todoService.deleteTodo(event.todo, event.index);
				break;
			case 'done':
				this.todoService.markDone(event.todo, event.index);
				break;
			case 'edit':
				this.edit.next({todo: event.todo, index: event.index});
				break;
			default: break;
		}	
	}
}