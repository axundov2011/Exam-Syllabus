import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SagirdService } from "../services/sagird.service";
import { Sagird } from "../models/sagird.model";
import { ReactiveFormsModule,FormBuilder, Validators,FormGroup } from "@angular/forms";

@Component({
    selector: 'app-sagird-list',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './sagird-list.component.html',
    styleUrls: ['./sagird-list.component.css']
})

export class SagirdListComponent{
    sagirdForm: FormGroup;
    sagirdler: Sagird[] = [];

    constructor(private fb: FormBuilder, private sagirdService: SagirdService) {
        this.sagirdForm = this.fb.group({
            number: ['', [Validators.required, Validators.min(1), Validators.max(99999)]],
            name: ['', [Validators.required, Validators.maxLength(30)]],
            surName: ['', [Validators.required, Validators.maxLength(30)]],
            class: ['', [Validators.required, Validators.min(1), Validators.max(12)]]
        });

        this.sagirdler = this.sagirdService.getSagird();
        
    }

    onSubmit(){
        if(this.sagirdForm.valid){
            this.sagirdService.addSagird(this.sagirdForm.value);
            this.sagirdler = this.sagirdService.getSagird();
            this.sagirdForm.reset();
        }
    }
}