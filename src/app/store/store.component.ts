import { Component } from "@angular/core";
import { Advertisement } from "../model/advertisement.model";
import { AdvertisementRepository } from "../model/advertisement.repository";
import { CatalogFavorits } from "app/model/catalog.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory = null;
    public advertisementsPerPage = 4;
    public selectedPage = 1;
    
    constructor(private repository: AdvertisementRepository,
                private catalog: CatalogFavorits,
                private router: Router) { }

    get advertisements(): Advertisement[] {
        let pageIndex = (this.selectedPage - 1) * this.advertisementsPerPage;
        return this.repository.getAdvertisements(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.advertisementsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
        
    changePageSize(newSize: number) {
        this.advertisementsPerPage = Number(newSize);
        this.changePage(1);
    }

    isFavourits(advertisement: Advertisement): boolean {
        return this.catalog.isFavourits(advertisement);
    }
        
    get pageCount(): number {
        return Math.ceil(this.repository
            .getAdvertisements(this.selectedCategory).length / this.advertisementsPerPage)
    }
    

    addAdvertisementToCatalog(advertisement: Advertisement) {
        this.catalog.addLine(advertisement);
        // this.router.navigateByUrl("/catalog");
    }
}