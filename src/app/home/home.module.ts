import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { InputFormComponent } from '../input-form/input-form.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { ResultComponent } from '../result/result.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,MyHeaderModule
  ],
  declarations: [HomePage,InputFormComponent,ResultComponent]
})
export class HomePageModule {}
