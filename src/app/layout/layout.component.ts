import { Component, OnInit } from '@angular/core';
import { Observable, of, range, reduce } from 'rxjs';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  numbers = [1, 2, 3];

  filterOutEvens = filter((x: number) => x % 2 !== 0);
  doubleBy = (x: number) => map((value: number) => value * x);
  sum = reduce((acc: number, next: number) => acc + next, 0);

  source$ = range(0, 10);

  values = [];

  constructor() {}

  ngOnInit(): void {
    this.calc(this.source$).subscribe(x => this.values.push(x));
  }

  calc(observable: Observable<any>) {
    return observable.pipe(
      this.filterOutEvens,
      this.doubleBy(2),
      // this.sum
    );
  }


}
