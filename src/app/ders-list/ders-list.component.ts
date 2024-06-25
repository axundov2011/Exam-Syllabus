import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DersService } from "../services/ders.service";
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ders } from "../models/ders.model";


@Component({
  selector: 'app-ders-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ders-list.component.html',
  styleUrls: ['./ders-list.component.scss']
})


export class DersListComponent {
  dersForm: FormGroup;
  dersler: Ders[] = [];

  constructor(private fb: FormBuilder, private dersService: DersService) {
    this.dersForm = this.fb.group({
      code:['', [Validators.required, Validators.maxLength(3)]],
      name: ['', [Validators.required, Validators.maxLength(30)]],
      class: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      teacherName: ['', [Validators.required, Validators.maxLength(20)]],
      teacherSurName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.dersler = this.dersService.getDersler();
  }

  onSubmit(){
    if(this.dersForm.valid){
      this.dersler.push(this.dersForm.value);
      this.dersForm.reset();
    }
  }
}