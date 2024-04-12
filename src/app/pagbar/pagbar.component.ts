import { Component, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagbar',
  standalone: true,
  imports: [],
  templateUrl: './pagbar.component.html',
  styleUrl: './pagbar.component.css'
})
export class PagbarComponent {
  @Input() currentPage!: number;
  @Input() totalItems!: number;
  @Input() itemsPerPage !: number;

  @Output() pageChange = new EventEmitter<number>();

  totalPages!: number;

  constructor() { }

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
