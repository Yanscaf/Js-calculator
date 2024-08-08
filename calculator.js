const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divide: '/'
};

function calculate({a, b, operation}) {
    let result = null;
    switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
            break;
        case OPERATION.substract:
            result = substract(a, b);
            break;
        case OPERATION.multiply:
            result = multiply(a, b);
            break;
        case OPERATION.divide:
            result = divide(a, b);
            break;
    }
    return result;
}

