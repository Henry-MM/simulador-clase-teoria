const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const getQuantities = function (productsData, productName) {

    const quantities = productsData.reduce((data, currentProduct) => {

        if (currentProduct.nombre == productName) {
            data.push(currentProduct.cantidad);
        }

        return data;

    }, []);

    return quantities;
}

const getMinByMonth = function (productsData, productName) {

    const quantities = getQuantities(productsData, productName);
    const min = quantities.sort((a, b) => a - b)[0];

    return min;
}

const getMaxByMonth = function (productsData, productName) {

    const quantities = getQuantities(productsData, productName);
    const max = quantities.sort((a, b) => b - a)[0];

    return max;
}

const getAllMonthsMinMaxByProduct = function (data, productName) {

    const minsMaxs = data.reduce((minsMaxs, yearData) => {

        yearData.meses.forEach(month => {

            const monthName = month.nombre;
            const thisMonthProducts = month.productos;

            if (!(minsMaxs?.[monthName])) {

                minsMaxs[monthName] = {
                    min: getMinByMonth(thisMonthProducts, productName),
                    max: getMaxByMonth(thisMonthProducts, productName)
                }

                return;

            }

            const currentMin = minsMaxs[monthName].min;
            const currentMax = minsMaxs[monthName].max;

            const thisMonthMin = getMinByMonth(thisMonthProducts, productName)
            const thisMonthMax = getMaxByMonth(thisMonthProducts, productName)

            if (thisMonthMin < currentMin) {
                minsMaxs[monthName].min = thisMonthMin;
            }

            if (thisMonthMax > currentMax) {
                minsMaxs[monthName].max = thisMonthMax;
            }

        });

        return minsMaxs;

    }, {});

    return minsMaxs;
}

const getMonthsInRange = function (start, end) {

    const { month: startMonth, year: startYear } = start;
    const { month: endMonth, year: endYear } = end;

    const rangeByYear = [];



}

const getRandomNmber = function (min, max) {
    console.log(min, max)
    const randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
}

const getQuantityAverage = function (interval) {

    const { min, max } = interval;

    const random1 = getRandomNmber(min, max);
    const random2 = getRandomNmber(min, max);
    const random3 = getRandomNmber(min, max);
    const random4 = getRandomNmber(min, max);
    const random5 = getRandomNmber(min, max);

    const randomArray = [random1, random2, random3, random4, random5];

    const average = randomArray.reduce((sum, number) => sum += number, 0) / randomArray.length;

    return Math.round(average);
}

const getAmountOfYears = function (dates) {

    const { month: startMonth, year: startYear } = dates.start;
    const { month: endMonth, year: endYear } = dates.end;

    return endYear - startYear;
}

const makePredictionFullYear = function (intervalsByMonths, productPrice = 0) {

    const prediction = months.reduce((data, currentMonth) => {

        if (intervalsByMonths[currentMonth]) {
            const quantity = getQuantityAverage(intervalsByMonths[currentMonth])
            data[currentMonth] = {
                cantidad: quantity,
                ventas: quantity * productPrice
            }

        } else {
            data[currentMonth] = {
                cantidad: 0,
                ventas: 0
            }
        }

        return data;
        
    }, {});

    return prediction;
}

const getProductLastPrice = function (data, productName) {  

    const lastYearMonths = data[data.length - 1].meses;
    const productsLasthoMnth = lastYearMonths[lastYearMonths.length - 1].productos;

    const productInfo = productsLasthoMnth.find(product => product.nombre == productName);

    if (productInfo) {
        return productInfo.precio;
    }

    return 0;
}

const startSimulation = function (inputData) {

    const { inputFile, dates, products } = inputData;

    console.log("simulation");
    const baseData = inputFile.data;
    const intervalAllMonthsByProduct = getAllMonthsMinMaxByProduct(baseData, products.selectedProduct);
    const price = getProductLastPrice(baseData, products.selectedProduct)
    const amuntOfYears = getAmountOfYears(dates);

    const predictions = [];
    let startYear = dates.start.year;
    let endYear = dates.end.year;

    const currentYear = new Date().getFullYear();

    for (let index = 0; index <= amuntOfYears; index++) {

        predictions.push({
            "año": startYear,
            "producto": products.selectedProduct,
            data: makePredictionFullYear(intervalAllMonthsByProduct, price)
        });

        if (startYear == currentYear) {

            const dataObj = predictions[predictions.length - 1].data;
            const startMonthIndex = months.indexOf(dates.start.month);

            Object.keys(dataObj).forEach(month => {
                const monthIdx = months.indexOf(month);
                if (monthIdx < startMonthIndex) {
                    delete dataObj[month];
                }
            })
        }
        
        if (endYear == predictions[predictions.length - 1]["año"]) {

            const dataObj = predictions[predictions.length - 1].data;
            const endMonthIndex = months.indexOf(dates.end.month);

            Object.keys(dataObj).forEach(month => {
                const monthIdx = months.indexOf(month);
                if (monthIdx > endMonthIndex) {
                    delete dataObj[month];
                }
            })
        }

        startYear++;
    }

    

    /*
        1.obtener el min y max de los meses dentro del rango
        tomando en cuenta todos los anios anteriores

        esto nos dara un intervalo
    */

    /*
        2. generar 5 numeros aleatorios que se encuentren dentro del min y max
    */

    /*
        3. sumar los 5 valores y dividir entre 5 (promedio)
    */

    /*
        4. Mostrar en tabla
    */

    return predictions;
}

export {
    startSimulation
}