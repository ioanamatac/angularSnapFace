import { Component, OnInit } from '@angular/core';
import { interval, Observable, pipe } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit(): void {
     this.interval$ = interval(1000).pipe(
       filter(value1 => value1 % 3 === 0),       
       map(value2 => value2 % 2 === 0 ?
       'Je suis ${value1} et je suis pair':
       'Je suis ${value2} et je suis impair' 
       ),
       tap(text => this.logger(text))
     );
  } 
  logger(text : string) {
    console.log('Log: $(text)');
  }
  
}
