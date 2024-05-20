import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimaryComponent } from './Client Side/primary/primary.component';
import { HomeComponent } from './Client Side/Pages/home/home.component';
import { TravelsComponent } from './Client Side/Pages/travels/travels.component';
import { ReservationComponent } from './Client Side/Pages/reservation/reservation.component';
import { GalleryComponent } from './Client Side/Pages/gallery/gallery.component';
import { SecondaryComponent } from './Admin Side/secondary/secondary.component';
import { DashboardComponent } from './Admin Side/Pages/dashboard/dashboard.component';
import { EditHomeComponent } from './Admin Side/Pages/edit-home/edit-home.component';
import { EditTravelsComponent } from './Admin Side/Pages/edit-travels/edit-travels.component';
import { EditReservationComponent } from './Admin Side/Pages/edit-reservation/edit-reservation.component';
import { EditTestimonilasComponent } from './Admin Side/Pages/edit-testimonilas/edit-testimonilas.component';
import { LoginComponent } from './Admin Side/Pages/login/login.component';


const routes: Routes = [
  {
    path: "admin/login",
    component: LoginComponent,
  },
  {
  path: "admin",
  component: SecondaryComponent,
  children: [
    {
      path: "dashboard",
      component: DashboardComponent,
    },
    {
      path: "edit-home",
      component: EditHomeComponent,
    },
    {
      path: "edit-testimonilas",
      component: EditTestimonilasComponent,
    },
    {
      path: "edit-travels",
      component: EditTravelsComponent,
    },
    {
      path: "edit-reservation",
      component: EditReservationComponent,
    },
    {
      path: "",
      component: DashboardComponent,
    },
    { path: "**", component: DashboardComponent}
  ]
},
  {
    path: "",
    component: PrimaryComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "gallery",
        component: GalleryComponent,
      },
      {
        path: "reservation",
        component: ReservationComponent,
      },
      {
        path: "travels",
        component: TravelsComponent,
      },
      {
        path: "",
        component: HomeComponent,
      },
      { path: "**", component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
