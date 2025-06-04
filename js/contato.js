document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const status = document.getElementById("mensagemStatus");
  
  
    if (!nome || !email || !mensagem) {
      status.style.color = "red";
      status.textContent = "Por favor, preencha todos os campos.";
      return;
    }
  
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      status.style.color = "red";
      status.textContent = "Insira um e-mail válido.";
      return;
    }
  
    status.style.color = "green";
    status.textContent = "Mensagem enviada com sucesso!";
  
    
    document.getElementById("contactForm").reset();
  });