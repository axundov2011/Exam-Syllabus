import { Injectable } from '@angular/core';
import { Imtahan } from '../models/imtahan.model';

@Injectable({
    providedIn: 'root',
  })
  export class ImtahanService {
    private imtahanlar: Imtahan[] = [
      { classCode: 'MAT', pupilNumber: 1, examDate: new Date('2024-06-01'), price: 85 },
      { classCode: 'PHY', pupilNumber: 2, examDate: new Date('2024-06-02'), price: 90 },
    ];
  
    getImtahanlar(): Imtahan[] {
      return this.imtahanlar;
    }

    addImtahan(imtahan:Imtahan){
     this.imtahanlar.push(imtahan);
    }
  }

 