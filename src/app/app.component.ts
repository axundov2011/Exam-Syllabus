import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DersListComponent } from './ders-list/ders-list.component';
import { SagirdListComponent } from './sagird-list/sagird-list.component';
import { ImtahanListComponent } from './imtahan-list/imtahan-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DersListComponent,
    SagirdListComponent,
    ImtahanListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = ' İmtahan programı';
}
