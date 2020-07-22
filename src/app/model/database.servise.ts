import { Filter } from "./filter.model";
import { Injectable } from '@angular/core';


@Injectable()
export class DatabaseService {

    private db;
    private isFull: boolean;
    public filters: Filter[] = [];

    constructor() { }

    create() {
        this.db = window.openDatabase("Rent-Apart", "1.0", "description", 2 * 1024 * 1024);

        if(this.checkConnect()) {
            this.db.transaction(function(tx) {
                tx.executeSql(`CREATE TABLE if not exists filters(id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    category TEXT, repairs TEXT, minPrice INTEGER, maxPrice INTEGER, 
                    city TEXT, undeground TEXT, parking TEXT, elevator TEXT, rentalPeriod TEXT, 
                    withKids TEXT, withAnimals TEXT, minArea INTEGER, maxArea INTEGER, emailAddress TEXT)`, [], null, null);
                });
        }        
    }
    
    checkConnect() {
        if(!this.db){
            alert("Failed to connect to database.");
            return false;
        }

        return true;
    }

    insert(filter) {
        this.db.transaction(function(tx) {
            tx.executeSql(`INSERT INTO filters(category, repairs, minPrice, maxPrice, city, 
                undeground, parking, elevator, rentalPeriod, withKids, withAnimals, minArea, maxArea, emailAddress) 
                   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [filter.category, filter.repairs, filter.minPrice, filter.maxPrice, filter.city, 
                                                                    filter.undeground, filter.parking, filter.elevator, filter.rentalPeriod, filter.withKids, 
                                                                       filter.withAnimals, filter.minArea, filter.maxArea, filter.emailAddress], null, null);
        });    
    }

    fillResult(tx, result) {

        this.filters.splice(0, this.filters.length);
        for(var i = 0; i < result.rows.length; i++) {
            let filter = new Filter();

            filter.id = result.rows.item(i)['id'];
            filter.category = result.rows.item(i)['category'];
            filter.minPrice = isFinite(result.rows.item(i)['minPrice']) ? parseFloat(result.rows.item(i)['minPrice']) : 0;

            filter.maxPrice = isFinite(result.rows.item(i)['maxPrice']) ? parseFloat(result.rows.item(i)['maxPrice']) : 0;
            filter.city = result.rows.item(i)['city'];
            filter.repairs = result.rows.item(i)['repairs'];
            filter.parking = result.rows.item(i)['parking'];
            filter.elevator = result.rows.item(i)['elevator'];
            filter.rentalPeriod = result.rows.item(i)['rentalPeriod'];
            filter.withKids = (result.rows.item(i)['withKids']) == (undefined || "false") ? false : true;
            filter.withAnimals = (result.rows.item(i)['withAnimals'])  == (undefined || "false") ? false : true;
            filter.emailAddress = result.rows.item(i)['emailAddress'];
            filter.minArea = isFinite(result.rows.item(i)['minArea']) ? parseFloat(result.rows.item(i)['minArea']) : 0;
            filter.maxArea = isFinite(result.rows.item(i)['maxArea']) ? parseFloat(result.rows.item(i)['maxArea']) : 0;
            filter.undeground = result.rows.item(i)['undeground'];

            this.filters.push(filter);
        }

        // alert(result.rows.length);
    }

    output() {
        return this.filters;
    }

    deleteAllRows() {
        if(this.checkConnect()) {
            this.db.transaction(function(tx) {
                tx.executeSql(`DELETE FROM filters`, [], null, null);
            });
        }
        
        this.filters.splice(0, this.filters.length);
    }

    deleteRow(id: number) {
        if(this.checkConnect()) {
            this.db.transaction(function(tx) {
                tx.executeSql(`DELETE FROM filters WHERE id = (?)`, [id], null, null);
            });
        }

        let index = this.filters.findIndex(line => line.id == id);
        this.filters.splice(index, 1);
    }

    select() {
        this.isFull = false;
        this.db.transaction((tx) => (tx.executeSql("SELECT * FROM filters", [], this.fillResult.bind(this), null)));
    }    

}