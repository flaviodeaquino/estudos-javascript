function contar(){
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');

    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        alert('Você não preencheu todos os campos. Por gentileza, tente novamente.')
    } else if (inicio.value > fim.value && passo.value >= 1) {
        alert('O valor inicial é maior que o valor final. Para iniciar a contagem digite um passo negativo!')    
    } else if (passo.value == 0) {
        alert('O passo não pode ser 0. Por favor, tente novamente.')
    } else if (inicio.value <= fim.value){
        // Contagem crescente:
        res.innerHTML = 'Contando: '
        for (let c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
            res.innerHTML += `${c} \u{1F449} `;
        }
        
    } else {
        // Contagem decrescente
        let p = Number(passo.value) * (-1);
        res.innerHTML = `Contando:  ${inicio.value} ${fim.value} ${passo.value} ${p}`
        
        for(let c = Number(inicio.value); c >= Number(fim.value); c -= p) {
            res.innerHTML += `${c} \u{1F449} `;
        }
    }
    res.innerHTML += `\u{1F3C1}`
}