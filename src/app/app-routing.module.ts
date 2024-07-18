import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateFormsComponent } from './template-form/template-form.component'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'app-template-form', component: TemplateFormsComponent },
  { path: 'app-reactive-forms',component: ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
