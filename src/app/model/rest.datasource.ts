import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Advertisement } from "./advertisement.model";
import { CatalogFavorits } from "./catalog.model";
import { Filter } from "./filter.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    
    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    
    getAdvertisements(): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "advertisements");
    }

    saveFilter(filter: Filter): Observable<any> {
        return this.sendRequest(RequestMethod.Post, "filters", filter);
    }

    private sendRequest(verb: RequestMethod,
            url: string, body?: Advertisement | Filter): Observable<Advertisement | Filter> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());
    }
}