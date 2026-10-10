document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
  
    // Carrega o tema salvo no localStorage ou mantém escuro
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-sun';
      }
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      if (themeIcon) {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }
  
    // Evento de clique para mudar o modo
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isLightMode = document.body.classList.contains('light-mode');
  
        if (isLightMode) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
          if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
          }
        } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
          if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
          }
        }
      });
    }
  });
  function toggleDescricao(botao) {
    const descricao = botao.nextElementSibling;

    descricao.classList.toggle("ativo");

    if (descricao.classList.contains("ativo")) {
        botao.textContent = "Ver menos";
    } else {
        botao.textContent = "Ver mais";
    }
}