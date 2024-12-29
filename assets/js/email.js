document.getElementById('formEmail').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value; 
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
  
    var body = `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nMensagem: ${mensagem}`;
  
    var mailtoLink = `mailto:wesneipaiva@gmail.com?subject=Mensagem de Contato&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  });
  