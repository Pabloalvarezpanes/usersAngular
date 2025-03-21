import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

export const routes: Routes = [
    {path: "", pathMatch:"full", redirectTo:"home"},
    {path: "home", component: HomeComponent},
    {path: "newUser", component: NewUserComponent},
    {path: "user/View/:idUser", component: UserViewComponent},
    {path: "updateUser/:idUser", component: NewUserComponent},
    {path: "**", redirectTo: "home"}
];
