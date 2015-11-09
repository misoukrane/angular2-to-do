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
var todo_1 = require('./todo');
var todoFormComponent_1 = require('./todoFormComponent');
var todolist_1 = require('./todolist');
var todoService_1 = require('./todoService');
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.todo = new todo_1.Todo();
        this.index = -1;
        this.editing = false;
    }
    AppComponent.prototype.onEdit = function (event) {
        this.todo = event.todo;
        this.index = event.index;
        this.editing = true;
    };
    AppComponent.prototype.onSave = function () {
        this.todo = new todo_1.Todo();
        this.index = -1;
        this.editing = false;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1 class=\"text-center\">Angular 2 Todo App</h1>\n\t\t<div class=\"col-md-10 col-md-offset-1 hide\" [class.hide]=\"editing\">\n\t\t\t<todo-list [todoService]=\"todoService\" (edit)=\"onEdit($event)\"></todo-list>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<todo-form [todoService]=\"todoService\" [model]=\"todo\" [index]=\"index\" (save)=\"onSave()\"></todo-form>\n\t\t</div>\n\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, todoFormComponent_1.TodoFormComponent, todolist_1.TodolistComponent]
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [todoService_1.TodoService]);
//# sourceMappingURL=app.js.map