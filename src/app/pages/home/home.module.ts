import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuTitleComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
