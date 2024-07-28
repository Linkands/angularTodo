import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../todo-item';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgFor, NgIf, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  newTitle: string = '';
  newGoal: string = '';
  todoItemList: TodoItem[] = []

  addTodo() {
    const newTodo: TodoItem = {
      id: this.todoItemList.length + 1,
      title: this.newTitle,
      goal: this.newGoal,
      isDone: false
    };
    console.log(newTodo)
    this.todoItemList.unshift(newTodo);
    this.newTitle = '';
    this.newGoal = '';
  }

  markAsDone(index: number) {
    this.todoItemList[index].isDone = true;
  }

  deleteTodo(index: number) {
    this.todoItemList.splice(index, 1);
  }
}
