document.addEventListener('DOMContentLoaded', function() {
    // Controles de tamanho de fonte
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const resetarFonte = document.getElementById('resetar-fonte');
    const altoContraste = document.getElementById('alto-contraste');
    
    // Elementos que terão o tamanho da fonte alterado
    const elementosTexto = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, span, li');
    
    let nivelFonte = 2; // 1=pequena, 2=media (padrão), 3=grande, 4=muito grande
    
    // Aumentar fonte
    aumentarFonte.addEventListener('click', function() {
        if(nivelFonte < 4) {
            nivelFonte++;
            aplicarTamanhoFonte();
        }
    });
    
    // Diminuir fonte
    diminuirFonte.addEventListener('click', function() {
        if(nivelFonte > 1) {
            nivelFonte--;
            aplicarTamanhoFonte();
        }
    });
    
    // Resetar fonte
    resetarFonte.addEventListener('click', function() {
        nivelFonte = 2;
        aplicarTamanhoFonte();
    });
    
    // Aplicar o tamanho de fonte selecionado
    function aplicarTamanhoFonte() {
        // Remove todas as classes de tamanho de fonte
        document.body.classList.remove('fonte-pequena', 'fonte-media', 'fonte-grande', 'fonte-muito-grande');
        
        // Adiciona a classe correspondente ao nível atual
        switch(nivelFonte) {
            case 1:
                document.body.classList.add('fonte-pequena');
                break;
            case 2:
                document.body.classList.add('fonte-media');
                break;
            case 3:
                document.body.classList.add('fonte-grande');
                break;
            case 4:
                document.body.classList.add('fonte-muito-grande');
                break;
        }
        
        // Salva a preferência no localStorage
        localStorage.setItem('tamanhoFonte', nivelFonte);
    }
    
    // Modo alto contraste
    altoContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
        
        // Salva o estado no localStorage
        const modoAtivo = document.body.classList.contains('alto-contraste');
        localStorage.setItem('altoContraste', modoAtivo);
    });
    
    // Verificar preferências salvas ao carregar a página
    const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
    const contrasteSalvo = localStorage.getItem('altoContraste');
    
    if(tamanhoSalvo) {
        nivelFonte = parseInt(tamanhoSalvo);
        aplicarTamanhoFonte();
    }
    
    if(contrasteSalvo === 'true') {
        document.body.classList.add('alto-contraste');
    }
});
