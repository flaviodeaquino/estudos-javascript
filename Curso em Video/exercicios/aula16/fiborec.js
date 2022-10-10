function fibo(n){
    if (n === 1) return 1;
    if (n === 2) return 2;
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(9))
    