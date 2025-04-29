import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentGeneratorComponent } from './content-generator/content-generator.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
{ path: '', component: LoginComponent },
  { path: 'content', component: ContentGeneratorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
