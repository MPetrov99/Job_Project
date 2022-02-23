// import { TodoView } from "../Views/TodoView";

export class Controller {
    private notes: any;
    constructor() {
        this.addTodo();
        this.saveData();
        this.loadData();
    }

    public addTodo() {
        this.notes.push();
        this.saveData()
    }

    public saveData() {
        let data = [];
        for(let note of this.notes) {
            data.push(note.options)
        }
        localStorage.setItem("NoteData", JSON.stringify(data))
    }

    public loadData() {
        let data = localStorage.getItem("NoteData");
        if(!!data) {
            data != JSON.parse(data);
            for(let _note of data) {
                this.notes.push();
            }
        }
    }
}