import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooskComponent } from './boosk/boosk.component';
import { HomeComponent } from './home/home.component';
import { ApiInterceptor } from './interceptors/http.interceptor';
import { ErrorInterceptorCheckComponent } from './error-interceptor-check/error-interceptor-check.component';
import { GloablErrorHandlerService } from './error/gloabl-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    BooskComponent,
    HomeComponent,
    ErrorInterceptorCheckComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: GloablErrorHandlerService },
    /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
