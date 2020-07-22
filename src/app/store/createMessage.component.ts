import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FilterRepository } from "../model/filter.repository";
import { Filter } from "../model/filter.model";

@Component({
    moduleId: module.id,
    templateUrl: "createMessage.component.html"
})
export class CreateMessage { 
    filterSent: boolean = false;
    submitted: boolean = false;

    name: string = "";
    titleField: string = "";
    emailField: string = "";
    textquestion: string = "";

    submitForm(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.filterSent = true;
            this.submitted = false;
            this.name = "";
            this.titleField = "";
            this.emailField = "";
            this.textquestion = "";
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