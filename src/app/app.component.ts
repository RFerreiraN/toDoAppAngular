import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private _tareasService = inject(TareasService); 

  public tareaInput : string = '';
  public listaTareas : string [] = [];
 
  ngOnInit(): void {
   this.listaTareas = this._tareasService.getTareas()
  }

  agregarTarea(){
    this._tareasService.addTarea(this.tareaInput)
    this.listaTareas = this._tareasService.getTareas()
    this.tareaInput = ''
  }

  eliminarTarea(index : number){
    this._tareasService.deleteTarea(index)
    this.listaTareas = this._tareasService.getTareas()
  }
}
