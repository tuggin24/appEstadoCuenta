import { Component, Input } from '@angular/core';
import { Icons } from '../../../utilities/icons';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../../models/transaction.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [ FontAwesomeModule, CommonModule ],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.scss'
})
export class RecentTransactionComponent {
  Icons = Icons

  @Input() transaction:Transaction = { id: 0, value: 0, description: '', category: { id: 0, name: '' }, type: { id: 0, name: '' } };

}
