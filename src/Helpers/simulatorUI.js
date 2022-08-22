const getYearsFromCurrent = (quantity = 5) => {

    const currentYear = new Date().getFullYear();
    const yearsFormat = []

    for (let index = 0; index < quantity; index++) {

        const year = currentYear + index;

        yearsFormat.push({
            id: "y-" + year,
            label: year,
            value: year,
        });
    }

    return yearsFormat;
}

const getProductListFromInputData = (inputData) => {

    if (!Array.isArray(inputData)) return [];

    const products = inputData.reduce((products, yearData) => {

        const productsBytMonth = yearData.meses.map((month) => month.productos).flat();
        productsBytMonth.forEach(({ id, nombre }) => {

            const addedProductByID = products.find((product) => product.id === id);

            if (!addedProductByID) {
                products.push({
                    id: id,
                    nombre: nombre
                })
            }

        });

        return products;

    }, []);

    products.unshift({
        id: "default",
        nombre: "Elige uno de tus productos"
    });

    return products;
}

const getProductListSelectFormat = function (productList) {

    if (!Array.isArray(productList)) return [];

    const formattedList = productList.map(product => ({
        id: product.id,
        label: product.nombre,
        value: product.nombre,
    }));

    return formattedList
}

const getMonthsSelectFormat = function () {

    const optionsMonths = [
        { id: "m-Enero", label: "Enero", value: "Enero" },
        { id: "m-Febrero", label: "Febrero", value: "Febrero" },
        { id: "m-Marzo", label: "Marzo", value: "Marzo" },
        { id: "m-Abril", label: "Abril", value: "Abril" },
        { id: "m-Mayo", label: "Mayo", value: "Mayo" },
        { id: "m-Junio", label: "Junio", value: "Junio" },
        { id: "m-Julio", label: "Julio", value: "Julio" },
        { id: "m-Agosto", label: "Agosto", value: "Agosto" },
        { id: "m-Septiembre", label: "Septiembre", value: "Septiembre" },
        { id: "m-Octubre", label: "Octubre", value: "Octubre" },
        { id: "m-Noviembre", label: "Noviembre", value: "Noviembre" },
        { id: "m-Diciembre", label: "Diciembre", value: "Diciembre" }
    ];

    return optionsMonths;
}

const getMonthsSelectFormatFromCurrentDate = function (date) {

    const currentMonth = new Date().getMonth();
    const monthsFormatted = getMonthsSelectFormat();
    const monthsSplitted = monthsFormatted.slice(currentMonth + 1)

    return monthsSplitted;
}

export {
    getYearsFromCurrent,
    getProductListFromInputData,
    getProductListSelectFormat,
    getMonthsSelectFormatFromCurrentDate,
    getMonthsSelectFormat
}