/*HOME*/
// aplicar imagem no header
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var imageUrl = "./public/img/4Vhvgs.jpg"; // Substitua pelo caminho exato da sua imagem
  header.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${imageUrl}) center/cover no-repeat`;
});
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os elementos que devem ter o efeito fade-in
  var fadeElements = document.querySelectorAll(".fade-in");

  // Função para adicionar a classe 'visible' a um elemento
  function reveal(element, delay) {
    setTimeout(() => {
      element.classList.add("visible");
    }, delay);
  }

  // Aplica a função a cada elemento com um atraso incremental
  fadeElements.forEach((element, index) => {
    // Ajuste o atraso conforme necessário
    reveal(element, index * 500);
  });
});

// JavaScript para alternar a exibição do mapa e alterar o texto do botão
document.querySelector(".toggle-map").addEventListener("click", function () {
  var mapInfoContainer = document.querySelector(".map-info-container");
  mapInfoContainer.style.display =
    mapInfoContainer.style.display === "none" ? "block" : "none";
  this.textContent = this.textContent === "Leia Mais" ? "Voltar" : "Leia Mais";
});

function clearForm() {
  // Limpa todos os campos do formulário de cadastro
  document.getElementById("signupForm").reset();
}

function editForm() {
  // Foco no primeiro campo do formulário de cadastro
  document.getElementById("nameInput").focus();
}

// Esta função seria para processar a submissão do formulário
// Deve ser ajustada para corresponder a lógica de negócios
function submitForm() {
  var formElement = document.getElementById("signupForm");
  //aicionar a lógica para enviar os dados do formulário com AJAX.
  console.log("Formulário enviado");
  // formElement.submit(); /
}

$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "dd/mm/yyyy",
    startDate: "+1d", // Reservas a partir do dia seguinte
    autoclose: true,
  });

  // Garantir que a data de saída seja após a data de entrada
  $("#checkInDate").on("change", function () {
    var minDate = $("#checkInDate").datepicker("getDate");
    minDate.setDate(minDate.getDate() + 1); // Saída no mínimo um dia após a entrada
    $("#checkOutDate").datepicker("setStartDate", minDate);
  });

  $("#checkOutDate").on("change", function () {
    var maxDate = $("#checkOutDate").datepicker("getDate");
    $("#checkInDate").datepicker("setEndDate", maxDate);
  });
});

$(document).ready(function () {
  // Inicializa os DatePickers como já foi definido anteriormente

  // Event handler para quando o formulário de reserva é submetido
  $("#reservationForm").on("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura as informações
    var checkInDate = $("#checkInDate").val();
    var checkOutDate = $("#checkOutDate").val();
    var roomType = $("#roomType").find("option:selected").text();
    var numberOfPeople = $("#numberOfPeople").val();

    // Preenche o modal de confirmação com os detalhes da reserva
    var reservationDetails =
      "Check-in: " +
      checkInDate +
      "<br>Check-out: " +
      checkOutDate +
      "<br>Tipo de quarto: " +
      roomType +
      "<br>Número de pessoas: " +
      numberOfPeople;

    // Insere os detalhes no parágrafo do modal de confirmação
    $("#reservationDetails").html(reservationDetails);

    // Fechar o modal de reserva e abre o modal de confirmação
    $("#reservationModal").modal("hide");
    $("#confirmationModal").modal("show");
  });
});
