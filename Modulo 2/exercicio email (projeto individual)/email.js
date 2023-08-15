// Não alterar esse código
const enviarEmail = (addressee, subject, body) => {
  if (!addressee)
    return "Um destinatário precisa ser fornecido ao enviar um e-mail.";
  if (!subject)
    return "O campo de assunto não deveria estar vazio ao enviar um e-mail.";
  if (!body)
    return "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.";

  console.log(`
        
    _________________________________________________________

    De: news@carstore.com
    Para: ${addressee}
    Assunto: ${subject}
          
    ${body}
    
      `);

  return "E-mail enviado com sucesso!";
};

module.exports = enviarEmail;