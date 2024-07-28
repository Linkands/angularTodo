import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo-item';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;

  @Output() done = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onDone() {
    this.done.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
