import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path:'',
        component:RegistrationComponent
    }
    ]),
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
  ],
  bootstrap: [
    AppComponent
  ], schemas: [
    // CUSTOM_ELEMENTS_SCHEMA,
    // NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }


