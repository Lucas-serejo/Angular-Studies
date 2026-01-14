import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  data = input.required<any[]>()
  columns = input.required<string[]>()

}
