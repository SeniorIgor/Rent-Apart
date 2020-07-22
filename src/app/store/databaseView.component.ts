import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { FilterRepository } from "../model/filter.repository";
import { Filter } from "../model/filter.model";
import { DatabaseService } from './../model/database.servise';
import { get } from "selenium-webdriver/http";

@Component({
    moduleId: module.id,
    templateUrl: "dataBaseView.component.html"
})
export class DatabaseViewComponent {
    public filters: Filter[] = [];

    constructor(public dataBase: DatabaseService) {
        this.select();
    }

    select() {

        this.dataBase.create();
        this.dataBase.select();
            
        setTimeout(() => {
            if(!this.dataBase.filters) {
                alert('База данных не отвечает');
            } else {
                this.dataBase.filters.forEach(element => {
                    this.filters.push(element)
                });
            }
        }, 100);
    }

    deleteAllRows() {
        this.dataBase.deleteAllRows();

        this.filters.splice(0, this.filters.length);
    }

    deleteRow(id: number) {
        this.dataBase.deleteRow(id);

        let index = this.filters.findIndex(line => line.id == id);
        this.filters.splice(index, 1);
    }
}