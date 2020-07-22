import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Filter } from "./filter.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class FilterRepository {
    private filters: Filter[] = [];
    
    constructor(private dataSource: StaticDataSource) {}

    getFilters(): Filter[] {
        return this.filters;
    }

    saveFilter(filter: Filter): Observable<Filter> {
        return this.dataSource.saveFilter(filter);
    }
}