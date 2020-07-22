import { NgModule } from "@angular/core";
import { AdvertisementRepository } from "./advertisement.repository";
import { StaticDataSource } from "./static.datasource";
import { CatalogFavorits } from "./catalog.model";
// import { Filter } from "./filter.model";
// import { FilterRepository } from "./filter.repository";
import { RestDataSource } from "./rest.datasource";
import { DatabaseService } from './../model/database.servise';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [HttpModule],
    providers: [AdvertisementRepository, StaticDataSource, CatalogFavorits, DatabaseService,
            {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule { }