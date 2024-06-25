import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImtahanService } from "../services/imtahan.service";
import { Imtahan } from "../models/imtahan.model";
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from "@angular/forms";

@Component({
    selector: 'app-imtahan-list',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './imtahan-list.component.html',
    styleUrls: ['./imtahan-list.component.css']
})

export class ImtahanListComponent {
    imtahanForm: FormGroup;
    imtahanlar: Imtahan[] = [];

    constructor(private fb:FormBuilder,private imtahanService: ImtahanService){

        this.imtahanForm = this.fb.group({
            classCode: ['', [Validators.required, Validators.maxLength(3)]],
            pupilNumber: ['', [Validators.required, Validators.min(1), Validators.max(99999)]],
            examDate: ['', Validators.required],
            price: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
          });

          this.imtahanlar = this.imtahanService.getImtahanlar();
    }

    onSubmit() {
        if (this.imtahanForm.valid) {
          this.imtahanService.addImtahan(this.imtahanForm.value);
          this.imtahanlar = this.imtahanService.getImtahanlar();
          this.imtahanForm.reset();
        }
      }
}

