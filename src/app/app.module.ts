import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from "./store/store.component";
import { CreateFilterComponent } from "./store/createFilter.component";
import { DatabaseViewComponent } from "./store/databaseView.component";
import { CreateMessage } from "./store/createMessage.component";
import { CatalogDetailComponent } from "./store/catalogDetail.component";
import { MainPageComponent } from "./store/mainPage.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [StoreModule, BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: "main", component: MainPageComponent,
        canActivate: [StoreFirstGuard] },
      { path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard] },
      { path: "catalog", component: CatalogDetailComponent,
        canActivate: [StoreFirstGuard] },
        { path: "question", component: CreateMessage,
        canActivate: [StoreFirstGuard] },
      { path: "filter", component: CreateFilterComponent,
        canActivate: [StoreFirstGuard] },
      { path: "database", component: DatabaseViewComponent,
        canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/main" }
      ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
