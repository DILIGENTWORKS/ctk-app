import { Component } from '@angular/core';

@Component({
  selector: 'app-term-dates',
  templateUrl: './term-dates.component.html'
})
export class TermDatesComponent {
  terms = [
    { term: 'Autumn 2025', dates: 'Sep 7 - Dec 14 (Sundays)' },
    { term: 'Spring 2026', dates: 'Jan 11 - Mar 29 (Sundays)' },
    { term: 'Summer 2026', dates: 'Apr 19 - Jul 12 (Sundays)' },
  ];
}
