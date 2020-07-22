import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { FilterRepository } from "../model/filter.repository";
import { Filter } from "../model/filter.model";
import { DatabaseService } from './../model/database.servise';
import { get } from "selenium-webdriver/http";

@Component({
    moduleId: module.id,
    templateUrl: "createFilter.component.html",
    styleUrls: ["createFilter.component.css"]
})
export class CreateFilterComponent {
    private filterSent: boolean = false;
    public filter: Filter = new Filter();
    private submitted: boolean = false;

    constructor(public dataBase: DatabaseService) {}
        
    submitForm(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.dataBase.create();
            this.dataBase.insert(this.filter);
            
            this.filterSent = true;
            this.submitted = false;
        }
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`Пожалуйста заполните поле ${thing}`);
                        break;
                    case "minlength":
                        messages.push(`Поле ${thing} должно содержать минимум
                            ${state.errors['minlength'].requiredLength}
                            символов`);
                        break;
                    case "pattern":
                        (thing != 'электронная почта') ? 
                        messages.push(`Поле ${thing} содержит неправильные символы`) :
                        messages.push(`Неправильный формат электронной почты`);
                        break;
                }
            }
        }

        return messages;
    }
}