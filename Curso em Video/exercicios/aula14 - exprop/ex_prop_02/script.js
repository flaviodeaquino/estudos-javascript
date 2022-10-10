function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = Number(ano) - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade < 2) {
                // Bebê
                img.setAttribute('src', 'imagens/homem_bebe.jpg')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/homem_crianca.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/homem_adolescente.jpg')
            } else if (idade < 24) {
                // Jovem adulto
                img.setAttribute('src', 'imagens/homem_jovem.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/homem_adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem_idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade < 2) {
                // Bebê
                img.setAttribute('src', 'imagens/mulher_bebe.jpg')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/mulher_crianca.jpg')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/mulher_adolescente.jpg')
            } else if (idade < 24) {
                // Jovem adulto
                img.setAttribute('src', 'imagens/mulher_jovem.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher_adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher_idosa.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero.toLowerCase()} com ${idade} anos.`;
        res.appendChild(img)

    }
}