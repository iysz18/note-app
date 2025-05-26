const { add, format } = require("date-fns");

class Note {
    constructor(title, content, date, priority) {
        this._title = title;
        this._content = content;
        this._date = date;
        this._priority = priority;
    }

    get noteTitle() {
        return this._title;
    }

    get noteContent() {
        return this._content;
    }

    get dueDate() {
        const today = new Date();
        const calcDueDate = add(today, this._date );

        return format(calcDueDate, "dd-MM-yyyy");
    }

    get priority() {
        return this._priority;
    }
}