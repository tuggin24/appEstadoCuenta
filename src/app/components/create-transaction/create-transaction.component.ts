import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Icons } from '../../utilities/icons';



@Component({
  selector: 'app-create-transaction',
  standalone: true,
  imports: [ CommonModule, FontAwesomeModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatInputModule ],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss'
})
export class CreateTransactionComponent {

  Icons = Icons
}
