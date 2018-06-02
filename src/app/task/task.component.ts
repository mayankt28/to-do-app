import { TASKS } from './../mock-tasks';
import { Component, OnInit } from '@angular/core';
import { Task } from './../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = TASKS;
  selectedTask: Task;
  constructor() { }

  ngOnInit() {
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
