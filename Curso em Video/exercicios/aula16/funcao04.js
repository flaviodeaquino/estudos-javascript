// 5! = 5 * 4 * 3 * 2 * 1

function fatorial(n) {
    let fat = 1
    for (let i = n; i > 1; i--) {
        fat = fat * i
    }
    return fat
}

console.log(fatorial(6))