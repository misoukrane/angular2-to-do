var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            { name: 'Build Angular 2 app.', done: true },
            { name: 'Push it to github.', done: false }
        ];
    }
    TodoService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoService.prototype.deleteTodo = function (todo, index) {
        this.todos.splice(index, 1);
    };
    TodoService.prototype.markDone = function (todo, index) {
        todo.done = true;
    };
    TodoService.prototype.saveTodo = function (todo, index) {
        this.todos[index] = todo;
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map