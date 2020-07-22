import { Component } from "@angular/core";
import { CatalogFavorits } from "../model/catalog.model";
import { NgForm } from "@angular/forms";
import { FilterRepository } from "../model/filter.repository";
import { Filter } from "../model/filter.model";

@Component({
    moduleId: module.id,
    templateUrl: "mainPage.component.html",
    styleUrls: ["mainPage.component.css"]
})
export class MainPageComponent {
    constructor(public catalog: CatalogFavorits) {};
}