import { TASKS } from './../mock-tasks';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  @Input() selectedTask: Task;
  addMode: boolean = false;
  id: number = 12;
  title: string;
  info  :string;

  constructor() { }

  ngOnInit() {
  }

  addTask(): void{
    this.addMode = true;
  }

  save(): void{
    this.addMode = false;
    var newTask = new Task();
    if(this.title && this.info){
      console.log(this.title);
      newTask.title = this.title;
      newTask.id = this.id;
      newTask.info = this.info;
      this.id +=1;
      newTask.status = 1;
      TASKS.push(newTask);
    }
  }

  cancel(): void{
    this.addMode = false;
  }

}
