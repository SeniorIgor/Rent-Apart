import { Injectable } from "@angular/core";
import { Advertisement } from "./advertisement.model";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class AdvertisementRepository {
    private advertisements: Advertisement[] = [];
    private categories: string[] = [];
    
    constructor(private dataSource: StaticDataSource) {
        dataSource.getAdvertisements().subscribe(data => {
            this.advertisements = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getAdvertisements(category: string = null): Advertisement[] {
        return this.advertisements
            .filter(p => category == null || category == p.category);
    }

    getAdvertisement(id: number): Advertisement {
        return this.advertisements.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}