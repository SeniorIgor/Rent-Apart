import { Injectable } from "@angular/core";
import { Advertisement } from "./advertisement.model";

@Injectable()
export class CatalogFavorits {
    public lines: Advertisement[] = [];
    public itemCount: number = 0;

    addLine(advertisement: Advertisement) {
        let line = this.lines.find(line => line.id == advertisement.id);
        if (line != undefined) {
            this.removeLine(line.id);
        } else {
            this.lines.push(advertisement);
        }
        this.recalculate();
    }

    isFavourits(advertisement: Advertisement): boolean {
        return this.lines.includes(advertisement);
    }

    updateQuantity(advertisement: Advertisement) {
        let line = this.lines.find(line => line.id == advertisement.id);

        this.recalculate();
    }
    
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
    }

    private recalculate() {
        this.itemCount = this.lines.length;
    }
}