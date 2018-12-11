import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {StoreListComponent} from "./store-list/store-list.component";
import { AuthGuard} from "./authGaurd/auth.guard";
import {DetailListComponent} from "./detail-list/detail-list.component";


const routes: Routes = [
  { path: 'storelist', component: StoreListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'detail', component: DetailListComponent},
  { path: '', component: LogInComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
