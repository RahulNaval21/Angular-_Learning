import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveLearningDirective } from './directives/directive-learning.directive';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { NewPiprPipe } from './new-pipr.pipe';
import { NewPipePipe } from './new-pipe.pipe';
import { loggingInterceptor } from './interceptors/logging';
import { TemplateFormsComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveLearningDirective,
    PipesComponent,
    NewPiprPipe,
    NewPipePipe,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
