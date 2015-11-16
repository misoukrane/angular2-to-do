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
var todo_1 = require('../todo/todo');
var todoService_1 = require('../todoService/todoService');
var Todolist = (function () {
    function Todolist(todoService) {
        this.edit = new angular2_1.EventEmitter();
        this.todoService = todoService;
        this.todos = this.todoService.getTodos();
    }
    Todolist.prototype.onChange = function (event) {
        switch (event.type) {
            case 'delete':
                this.todoService.deleteTodo(event.todo, event.index);
                break;
            case 'done':
                this.todoService.markDone(event.todo, event.index);
                break;
            case 'edit':
                this.edit.next({ todo: event.todo, index: event.index });
                break;
            default: break;
        }
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoService)
    ], Todolist.prototype, "todoService");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], Todolist.prototype, "edit");
    Todolist = __decorate([
        angular2_1.Component({
            selector: 'todo-list',
            template: "\n\t\t<div class=\"row\">\n\t\t\t<to-do  *ng-for=\"#todo of todos; var index=index\" [todo]=\"todo\" [index]=\"index\" (change)=\"onChange($event)\"></to-do>\n\t\t</div>\n\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, todo_1.TodoComponent]
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], Todolist);
    return Todolist;
})();
exports.Todolist = Todolist;
//# sourceMappingURL=todolist.js.map