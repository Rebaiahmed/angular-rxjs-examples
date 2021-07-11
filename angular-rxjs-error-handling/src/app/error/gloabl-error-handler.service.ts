import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GloablErrorHandlerService implements ErrorHandler {
  constructor(private zone: NgZone) {}
  handleError(error: any): void {
    this.zone.run(() => {
      alert('ngzone!!');
      console.error('Error from global error handler', error);
    });
  }
}
