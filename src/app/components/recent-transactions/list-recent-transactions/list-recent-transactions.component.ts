import { Component } from '@angular/core';
import { RecentTransactionComponent } from "../recent-transaction/recent-transaction.component";
import { Transaction } from '../../../models/transaction.model';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-list-recent-transactions',
  standalone: true,
  imports: [RecentTransactionComponent, FontAwesomeModule, CommonModule],
  templateUrl: './list-recent-transactions.component.html',
  styleUrl: './list-recent-transactions.component.scss'
})
export class ListRecentTransactionsComponent {

  transactions:Transaction[] = [
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 1, value: 2000000, description: 'Salario Julio', category: { id: 1, name: 'Salario' }, type: { id: 1, name: 'Ingresos' } },
    { id: 2, value: 1000000, description: 'Mercado', category: { id: 2, name: 'Casa' }, type: { id: 2, name: 'Egresos' } }
  ];
}
