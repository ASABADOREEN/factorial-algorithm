//ASABA DOREEN, I didnt by myself
function factorial(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else if(n==1) {
        return 1;
    }
    else if(n==0){
        return 1

    }
    else {
        return -1;
    }
}

module.exports = factorial;