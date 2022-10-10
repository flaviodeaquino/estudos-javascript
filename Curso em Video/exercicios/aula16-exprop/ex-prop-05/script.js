let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.querySelector('div#res')
let valores = []

let maior = '';
let menor = 101;
let soma = 0;
let media = 0;

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) return true 
    else return false
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) return true
    else return false
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

        if (Number(num.value) > maior) {
            maior = Number(num.value)
        }
        if (Number(num.value) < menor) {
            menor = Number(num.value)
        }
        soma = soma + Number(num.value);
        media = soma / 2;
    } else {
        alert('Valor inválido ou já encontrado na lista. Por gentileza, digite novamente.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números cadastrados foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos números cadastrados for ${media}.</p>`
        
    }
}
