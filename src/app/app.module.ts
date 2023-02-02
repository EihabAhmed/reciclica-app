import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingModule } from "./modules/loading/loading.module";

@NgModule({
    declarations: [AppComponent],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ...AppStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        LoadingModule
    ]
})
export class AppModule {}
