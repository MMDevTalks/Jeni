import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { PreloadAllModules } from '@angular/router';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [AnonymousGuard]
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'details',
    outlet: 'sidebar',
    component: ProxyRouteComponent,
    children: [
      {
        path: '',
        loadChildren: './details/details.module#DetailsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
