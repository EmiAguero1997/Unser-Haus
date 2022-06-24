import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModule } from '../test/test.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TestModule
  ],
  exports:[HeaderComponent, HeroComponent]
})
export class LayoutModule { }
