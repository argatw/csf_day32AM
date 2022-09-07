import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32';
  value: number = 0
  numList: number[] = []

  @ViewChild(TodoComponent)
  todoComp!: TodoComponent

  @ViewChild('todo')
  todoElemRef!: ElementRef

  @ViewChildren(TodoComponent)
  todoComps!: QueryList<TodoComponent>

  ngOnInIt(): void {
    console.info("onInIt todoComp:: ",this.todoComp)

    console.info("onInIt activated", this.numList)
    for (let i = 0; i < 5; i++) {
      this.numList.push(Math.floor(Math.random() * 100))
    }
    console.info("onInIt random:: ",this.numList)
  }
  ngAfterViewInIt(): void {
    console.info('>>> ngAfterViewInit todoComp:', this.todoComp)
    console.info('>>> ngAfterViewInit todoElemRef:', this.todoElemRef.nativeElement)
    console.info('>>> ngAfterViewInit todoComps:', this.todoComps.length)
  }

  saveToDo() {
    const todo = this.todoComp.getValues()
    console.info("saveToDo:: ", todo)

  }

  randomize() {
    this.value = Math.floor(Math.random() * 100)
    // create new array
    const tmp: number[] = [...this.numList, this.value]
    // assign new array to binding
    this.numList = tmp
    console.info("randomize() set:: ",tmp)
  }
}
