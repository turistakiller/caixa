function redirectToExpenses(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obtém os valores dos campos de CPF e senha
  var cpf = document.getElementById("cpf").value;
  var senha = document.getElementById("senha").value;
  
  // Verifica se as credenciais são válidas
  if (cpf === "05972070111" && senha === "waslley2023") {
    // Redireciona para a página de gastos se as credenciais forem válidas
    window.location.href = "cursos.html";
  } else {
    // Exibe uma mensagem de erro caso as credenciais sejam inválidas
    alert("Credenciais inválidas. Por favor, verifique seu CPF e senha.");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Exibe o loader
  showLoader();

  // Simula um atraso de 3 segundos
  setTimeout(function() {
    const options = {
      chart: {
        type: 'bar',
        height: 300
      },
      series: [{
        name: 'Gastos',
        data: [1200.42, 1187.37, 1137.04, 1220.18, 1474.04, 0]
      }],
      xaxis: {
        categories: ['01/05', '02/05', '03/05', '04/05', '05/05', '06/05']
      },
      yaxis: {
        title: {
          text: 'Valor'
        }
      },
      
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Esconde o loader após a renderização do gráfico
    hideLoader();
  }, 1500);
});

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}
