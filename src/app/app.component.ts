import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  balanceItems = [
    { label: 'Conta Corrente', amount: 'R$ 200,00' },
    { label: 'Conta Corrente Saldo Vinculados', amount: 'R$ 300,00' },
    { label: 'Conta Poupança Saldo Vinculados', amount: 'R$ 400,00' },
    { label: 'Investimento com Baixa Automática', amount: 'R$ 500,00' },
    { label: 'Investimento sem Baixa Automática', amount: 'R$ 500,00' },
  ];

  balanceSummary = [
    { label: 'SALDO TOTAL', amount: 'R$ 1000,00' },
    { label: 'LIVRE PARA MOVIMENTAÇÃO', amount: 'R$ 1000,00' },
  ];

}
