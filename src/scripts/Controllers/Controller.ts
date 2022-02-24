// import { TodoView } from "../Views/TodoView";

export class Controller {
    // static getTodos(): any {
    //   throw new Error("Method not implemented.");
    // }
    // private notes: any;
    constructor() {
        // this.addTodo();
        // this.saveData();
        // this.loadData();
        this.getTodos();
        this.saveTodos();
    }

    public getTodos() {
        const data = JSON.parse(localStorage.getItem("todos") || "[]");

        return data.sort((a: { updated: string | number | Date; }, b: { updated: string | number | Date; }) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    public saveTodos() {

    }

    // public addTodo() {
    //     this.notes.push();
    //     this.saveData()
    // }

    // public saveData() {
    //     let data = [];
    //     for(let note of this.notes) {
    //         data.push(note.options)
    //     }
    //     localStorage.setItem("NoteData", JSON.stringify(data))
    // }

    // public loadData() {
    //     let data = localStorage.getItem("NoteData");
    //     if(!!data) {
    //         data != JSON.parse(data);
    //         for(let _note of data) {
    //             this.notes.push();
    //         }
    //     }
    // }

    //  // [x: string]: any;
    //  private notes: any;
    //  constructor() {
    //      // this.exportData();
    //      // this.saveData();
    //      // this.loadData();
    //  }
 
    //  public exportData() {
    //      const todoData = ["", "", "", ""];
    //      return todoData;
    //  }
 
    //  public saveData() {
    //      let data = [];
    //      for(let note of this.notes) {
    //          data.push(note.todoData)
    //      }
    //      localStorage.setItem("NoteData", JSON.stringify(data));
    //  }
 
    //  public loadData() {
    //      let data = localStorage.getItem("NoteData");
    //      if(!!data) {
    //          data = JSON.parse(data);
    //          for(let arr of data) {
    //              this.addChild(new TodoView(arr));
    //          }
    //      }
    //  }
}