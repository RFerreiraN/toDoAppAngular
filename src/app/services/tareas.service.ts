import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'Tareas';

  getTareas() : string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]')
  }

  addTarea(tarea : string){
    const tareas = this.getTareas();
    if(tarea.length === 0) return
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  deleteTarea(id: number){
    const tareas = this.getTareas();
    tareas.splice(id,1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  

}
