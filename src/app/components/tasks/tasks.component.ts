import { Component, Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Tasks } from 'src/app/models/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  [x: string]: any;
  ngOnInit(): void {}
  constructor() {}

  tasksData: Tasks[] = TASKS;
}
