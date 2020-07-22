import { Component } from "@angular/core";
import { CatalogFavorits } from "./../model/catalog.model";

@Component({
    moduleId: module.id,
    templateUrl: "catalogDetail.component.html"
})
export class CatalogDetailComponent {
    constructor(public catalog: CatalogFavorits) { }
}