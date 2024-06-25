import { Injectable } from '@angular/core';
import { Ders } from '../models/ders.model';

@Injectable({
  providedIn: 'root'
})

export class DersService{
  private dersler: Ders[] = [
    { code: 'MAT', name: 'Matematika', class: 10, teacherName: 'Ali', teacherSurName: 'Veliyev' },
    { code: 'AZE', name: 'Azərbaycan dili', class: 9, teacherName: 'Nigar', teacherSurName: 'Qasımovalı' },
    { code: 'FIZ', name: 'Fizika', class: 11, teacherName: 'Rəşad', teacherSurName: 'Soltanov' },
 ]

  constructor(){ }
  getDersler(): Ders[]{
    return this.dersler;
  }
}

