import { Task } from './../task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  edit: boolean = false;
  
  constructor() {}

  ngOnInit() {
  }
  markDone(): void{
    this.task.status = 0;
  }

  editMode(): void{
    this.edit = true;
  }

  save(): void{
    this.edit = false;
  }

}
