import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CatalogSummaryComponent } from "./catalogSummary.component";
import { CatalogDetailComponent } from "./catalogDetail.component";
import { CreateFilterComponent } from "./createFilter.component";
import { DatabaseViewComponent } from "./databaseView.component";
import { CreateMessage } from "./createMessage.component";
import { MainPageComponent } from "./mainPage.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CatalogSummaryComponent,
            CatalogDetailComponent, CreateFilterComponent, MainPageComponent, DatabaseViewComponent, CreateMessage],
    exports: [StoreComponent, CatalogDetailComponent, CreateFilterComponent, MainPageComponent, DatabaseViewComponent, CreateMessage]
})
export class StoreModule { }