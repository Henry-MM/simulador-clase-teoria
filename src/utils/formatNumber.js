const getCurrencyFormat = function (value) {

    const number = isNaN(value) ? 0 : value;

    const format = new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'HNL',
    }).format(number);

    return format;
}

export {
    getCurrencyFormat
}