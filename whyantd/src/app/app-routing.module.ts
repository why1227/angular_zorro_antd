import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';
import { TeamComponent } from './team/team.component';
import { GridComponent } from './grid/grid.component';
import { UploadComponent } from './upload/upload.component';
import { ElementUiComponent } from './element-ui/element-ui.component';



const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "team",
    component: TeamComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "upload",
    component: UploadComponent
  },
  {
    path: "elementUI",
    component: ElementUiComponent
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
