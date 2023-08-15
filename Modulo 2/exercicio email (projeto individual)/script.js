function obterDiaDaSemana() {
    const diaDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoje = new Date();
    const diaIndex = hoje.getDay();
    return diaDaSemana[diaIndex];
  }
  
  console.log(`Hoje é: ${obterDiaDaSemana()}`);
  
  function enviarEmailsParaClientes(listaClientes, novosVeiculos, veiculosMaisVendidos, condicoesAquisicao) {
    const diaSemana = obterDiaDaSemana();
  
    if (diaSemana !== 'Domingo') {
      console.log('Hoje não é segunda-feira. Nenhum email será enviado.');
      return;
    }
  
    listaClientes.forEach(cliente => {
      if (cliente.receberEmailsMarketing) {
        const corpoEmail = emailBody(cliente.nome, novosVeiculos, veiculosMaisVendidos, condicoesAquisicao);
        // Chamada à função fictícia de envio de email
        enviarEmail(cliente.email, 'Novidades na CarStore', corpoEmail);
      }
    });
  }
  
  // Função de montagem do corpo do email
  function emailBody(clientName, newVehicles, topSellingVehicles, acquisitionConditions) {
    const emailBody = `
      Olá, ${clientName}!
  
      Temos ótimas notícias para você. Chegaram novos veículos incríveis à nossa loja! Confira alguns destaques:
  
      Novos Veículos:
      ${newVehicles.join(', ')}
  
      Veículos Mais Vendidos:
      ${topSellingVehicles.join(', ')}
  
      Condições para Aquisição:
      ${acquisitionConditions}
  
      Não perca essa oportunidade. Venha nos visitar!
  
      Atenciosamente,
      Equipe CarStore\n 
      ___________________________________________________________
    `;
  
    return emailBody;
  }
  
  // Exemplo de uso:
  const listaClientes = [
    { nome: 'Cliente 1', email: 'cliente1@example.com', receberEmailsMarketing: true },
    { nome: 'Cliente 2', email: 'cliente2@example.com', receberEmailsMarketing: false },
    { nome: 'Cliente 3', email: 'cliente2@example.com', receberEmailsMarketing: false },
    { nome: 'Cliente 4', email: 'cliente2@example.com', receberEmailsMarketing: true },
    { nome: 'Cliente 5', email: 'cliente2@example.com', receberEmailsMarketing: true }
  ];
  // Importe a função enviarEmail
const enviarEmail = require('./email');

function obterDiaDaSemana() {
  const diaDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const hoje = new Date();
  const diaIndex = hoje.getDay();
  return diaDaSemana[diaIndex];
}

console.log(`Hoje é: ${obterDiaDaSemana()}`);

function enviarEmailsParaClientes(listaClientes, novosVeiculos, veiculosMaisVendidos, condicoesAquisicao) {
  const diaSemana = obterDiaDaSemana();

  if (diaSemana !== 'Domingo') {
    console.log('Hoje não é segunda-feira. Nenhum email será enviado.');
    return;
  }

  listaClientes.forEach(cliente => {
    if (cliente.receberEmailsMarketing) {
      const corpoEmail = emailBody(cliente.nome, novosVeiculos, veiculosMaisVendidos, condicoesAquisicao);
      // Chamada à função de envio de email
      enviarEmail(cliente.email, 'Novidades na CarStore', corpoEmail);
    }
  });
}
  const novosVeiculos = ['Carro A', 'Carro B', 'Carro C'];
  const veiculosMaisVendidos = ['Carro X', 'Carro Y', 'Carro Z'];
  const condicoesAquisicao = 'Financiamento em até 60 meses com taxas especiais!';
  
  enviarEmailsParaClientes(listaClientes, novosVeiculos, veiculosMaisVendidos, condicoesAquisicao);