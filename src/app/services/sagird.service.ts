import { Injectable } from "@angular/core";
import { Sagird } from "../models/sagird.model";

@Injectable({
    providedIn:'root',
})

export class SagirdService{
    private sagirdler: Sagird[] = [
        { number: 1, name: 'Nicat', surName: 'Hüseynov', class: 10 },
        { number: 2, name: 'Nigar', surName: 'Qasımova', class: 10 },
      ];


      private nextNumber:number = 3;  

      getSagird(): Sagird[] {
        return this.sagirdler;
      }

      getNextNumber(): number {
        return this.nextNumber++;
    }
      addSagird(sagird:Sagird){
        sagird.number = this.getNextNumber();
        this.sagirdler.push(sagird);
      }
}