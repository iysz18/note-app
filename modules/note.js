import { format } from "date-fns";
export class Note {
    constructor(title, content, date, priority) {
        this._title = title;
        this._content = content;
        this._date = date;
        this._priority = priority;
    }

    // getters
    get getTitle() {
        return this._title;
    }

    get getContent() {
        return this._content;
    }

    get getDueDate() {
        return format(this._date, "dd, MM, yyyy");
    }
}
