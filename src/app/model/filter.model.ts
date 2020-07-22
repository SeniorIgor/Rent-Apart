import { Injectable } from "@angular/core";
// import { CatalogFavorits } from "./catalog.model";

export class Filter {
    public id: number;
    public category: string;
    public minPrice: number;
    public maxPrice: number;
    public city: string;
    public repairs: string;
    public parking: string;
    public elevator: string;
    public rentalPeriod: string;
    public withKids: boolean = false;
    public withAnimals: boolean = false;
    public emailAddress: string;
    public minArea: number;
    public maxArea: number;
    public undeground: string;

    // constructor(public catalog: CatalogFavorits) { }

    constructor(category?: string,
                minPrice?: number,
                maxPrice?: number,
                city?: string,
                repairs?: string,
                parking?: string,
                elevator?: string,
                rentalPeriod?: string,
                withKids?: boolean,
                withAnimals?: boolean,
                emailAddress?: string,
                minArea?: number,
                maxArea?: number,
                undeground?: string) { }
    
    // clear() {
    //     this.category = null;
    //     this.minPrice = this.maxPrice = 0;
    //     this.city = null;
    //     this.repairs = null;
    //     this.parking = null;
    //     this.elevator = null;
    //     this.rentalPeriod = null;
    //     this.withKids = false;
    //     this.withAnimals = false;
    //     this.emailAddress = null;
    //     this.minArea = this.maxArea = 0;
    //     this.undeground = null;

    //     // this.catalog.clear();
    // }
}