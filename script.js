function redirectToExpenses(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obtém os valores dos campos de CPF e senha
  var cpf = document.getElementById("cpf").value;
  var senha = document.getElementById("senha").value;
  
  // Verifica se as credenciais são válidas
  if (cpf === "11376056852" && senha === "1317") {
    // Redireciona para a página de gastos se as credenciais forem válidas
    window.location.href = "pagina-gastos.html";
  } else {
    // Exibe uma mensagem de erro caso as credenciais sejam inválidas
    alert("Credenciais inválidas. Por favor, verifique seu CPF e senha.");
  }
}
