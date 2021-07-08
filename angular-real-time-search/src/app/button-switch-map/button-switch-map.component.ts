import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-button-switch-map',
  templateUrl: './button-switch-map.component.html',
  styleUrls: ['./button-switch-map.component.scss'],
})
export class ButtonSwitchMapComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button;
  clicks$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.switchExample();
  }

  switchExample() {
    this.clicks$
      .pipe(
        switchMap(() => {
          return interval(1000);
        })
      )
      .subscribe((val) => console.log(val));
  }
}
