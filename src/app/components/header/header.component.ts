import { Component } from '@angular/core';
import { Tasks } from 'src/app/models/Tasks';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task tracker';

  toggleEvent() {
    alert('clicked!');
  }
}
