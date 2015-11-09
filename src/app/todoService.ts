import {Injectable} from 'angular2/angular2';
import {Todo} from './todo'

@Injectable()
export class TodoService {
	private todos: Todo[];
	
	public constructor() {
		this.todos = [
			{name: 'Build Angular 2 app.', done: true},
			{name: 'Push it to github.', done: false }
		];
	}
	
	public addTodo(todo: Todo) {
		this.todos.push(todo);
	}
	
	public deleteTodo(todo: Todo, index: number) {
		this.todos.splice(index, 1);
	}
	
	public markDone(todo: Todo, index: number) {
		todo.done = true;
	}
	
	public saveTodo(todo: Todo, index: number) {
		this.todos[index] = todo;
	}
	
	public getTodos() {
		return this.todos
	}
}