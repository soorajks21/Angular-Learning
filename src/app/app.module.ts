import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerModule} from './customer/customer.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
