import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryComponent } from './Client Side/primary/primary.component';
import { HomeComponent } from './Client Side/Pages/home/home.component';
import { NavbarComponent } from './Client Side/Components/navbar/navbar.component';
import { FooterComponent } from './Client Side/Components/footer/footer.component';
import { TravelsComponent } from './Client Side/Pages/travels/travels.component';
import { ReservationComponent } from './Client Side/Pages/reservation/reservation.component';
import { CardComponent } from './Client Side/Pages/card/card.component';
import { InfoComponent } from './Client Side/Pages/info/info.component';
import { TestimonialsComponent } from './Client Side/Pages/testimonials/testimonials.component';
import { GalleryComponent } from './Client Side/Pages/gallery/gallery.component';
import { SecondaryComponent } from './Admin Side/secondary/secondary.component';
import { DashboardComponent } from './Admin Side/Pages/dashboard/dashboard.component';
import { EditHomeComponent } from './Admin Side/Pages/edit-home/edit-home.component';
import { EditTravelsComponent } from './Admin Side/Pages/edit-travels/edit-travels.component';
import { EditReservationComponent } from './Admin Side/Pages/edit-reservation/edit-reservation.component';
import { SidebarComponent } from './Admin Side/Components/sidebar/sidebar.component';
import { NavComponent } from './Admin Side/Components/nav/nav.component';
import { LoginComponent } from './Admin Side/Pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTestimonilasComponent } from './Admin Side/Pages/edit-testimonilas/edit-testimonilas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReservationComponent,
    CardComponent,
    InfoComponent,
    TestimonialsComponent,
    GalleryComponent,
    SecondaryComponent,
    DashboardComponent,
    EditHomeComponent,
    EditTravelsComponent,
    EditReservationComponent,
    TravelsComponent,
    SidebarComponent,
    NavComponent,
    LoginComponent,
    EditTestimonilasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
