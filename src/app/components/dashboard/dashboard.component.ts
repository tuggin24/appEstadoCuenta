import { Component } from '@angular/core';
import { Icons } from '../../utilities/icons';
import { ListRecentTransactionsComponent } from "../recent-transactions/list-recent-transactions/list-recent-transactions.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, ListRecentTransactionsComponent, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  Icons = Icons

}
