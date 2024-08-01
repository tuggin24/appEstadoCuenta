import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../utilities/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog } from '@angular/material/dialog'
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ FontAwesomeModule, CommonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  Icons = Icons

  constructor(
    private dialog: MatDialog
  ){

  }

  newTransaction(){
    let form = this.dialog.open(CreateTransactionComponent, {
      closeOnNavigation:true,
      disableClose:false
    })
  }
}
