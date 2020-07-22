import { Component } from "@angular/core";
import { CatalogFavorits } from "../model/catalog.model";

@Component({
    selector: "catalog-summary",
    moduleId: module.id,
    templateUrl: "catalogSummary.component.html"
})
export class CatalogSummaryComponent {
    constructor(public catalog: CatalogFavorits) { }
}