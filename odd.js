function productOfOdds(M, N) {
    if (M > N) {
        return `M (${M}) should be less than or equal to N (${N})`;
    }
    let product = 1;
    let hasOdd = false;
    for (let i = M; i <= N; i++) {
        if (i % 2 !== 0) {  
            product *= i;  
            hasOdd = true;
        }
    }
    if (!hasOdd) {
        return "No odd numbers in the range";  
    }
    return product;
}
let M = parseInt(prompt("Enter the value for M:"));
let N = parseInt(prompt("Enter the value for N:"));
console.log(productOfOdds(M, N));
