import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
