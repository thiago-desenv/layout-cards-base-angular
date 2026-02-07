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

  creditItems = [
    { label: 'Disponível', amount: 'R$ 1200,00' },
    { label: 'Limite de Saque', amount: 'R$ 2000,00'},
    { label: 'Disponível', amount: 'R$ 1300,00'},
    { label: 'Limite Total Utilizado', amount: 'R$ 3000,00'},
  ];

  clientInfosItems = [
    { label: 'Nome', amount: 'Kuririn Teobaldo Cordeiro' },
    { label: 'Idade', amount: '26 anos' },
    { label: 'Renda Mensal', amount: 'R$ -1000,00' },
  ];

  isDivider(index: number, last: boolean) {
    return (index + 1) % 2 === 0 && !last;
  }
}
