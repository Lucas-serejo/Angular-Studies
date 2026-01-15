import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetsModule } from './widgets/widgets.module';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, WidgetsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listEmployees = [
    { id: 101, name: 'Carlos Silva', position: 'Developer', department: 'IT' },
    { id: 102, name: 'Mariana Souza', position: 'Designer', department: 'Marketing' },
    { id: 103, name: 'Fernanda Lima', position: 'Manager', department: 'Sales' },
    { id: 104, name: 'Roberto Alves', position: 'Analyst', department: 'IT' },
  ];

  myColumns = ['name', 'position', 'department'];
}
