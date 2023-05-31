import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DirectComponent } from './direct/direct.component';
import { Ps1Component } from './ps1/ps1.component';
import { Ps4Component } from './ps4/ps4.component';
import { Ps5Component } from './ps5/ps5.component';
import { Ps6Component } from './ps6/ps6.component';
import { SortPipe } from './sort.pipe';
import { Ps8Component } from './ps8/ps8.component';
import { Ps9Component } from './ps9/ps9.component';
import { Ps7Component } from './ps7/ps7.component';
import { CryptoCalciComponent } from './crypto-calci/crypto-calci.component';
import { HeaderComponent } from './ps10/header/header.component';
import { FooterComponent } from './ps10/footer/footer.component';
import { SidebarComponent } from './ps10/sidebar/sidebar.component';
import { PageComponent } from './ps10/page/page.component';
import { CalciComponent } from './calci/calci.component';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    DirectComponent,
    Ps1Component,
    Ps4Component,
    Ps5Component,
    Ps6Component,
    SortPipe,
    Ps8Component,
    Ps9Component,
    Ps7Component,
    CryptoCalciComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageComponent,
    CalciComponent,
    NgClassDemoComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
