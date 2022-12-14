import { v4 as uuidv4 } from 'uuid';

const defaultSimulatorDataInput = {
    inputFile: {
        file: null,
        fileName: null,
        data: null,
    },

    products: {
        selectedProduct: "",
        list: []
    },

    dates: {
        start: {
            month: null,
            year: null
        },

        end: {
            month: null,
            year: null
        }
    }
};

const defaultSimulatorDataOutput = [];

const reduceSimulatorInputs = function (prevState, action) {

    const { file, fileName, data, selectedProduct, productList, dates } = action.data;

    switch (action.type) {
        case "changeInputFile":
            return {
                ...prevState,
                inputFile: {
                    ...prevState.inputFile,
                    file: file,
                    fileName: fileName,
                    data: data,
                }
            }

        case "changeSelectedProduct":
            return {
                ...prevState,
                products: {
                    ...prevState.products,
                    selectedProduct: selectedProduct
                }
            }

        case "changeProductList":
            return {
                ...prevState,
                products: {
                    ...prevState.products,
                    list: productList
                }
            }

        case "changeDateStart":
            return {
                ...prevState,
                dates: {
                    ...prevState.dates,
                    start: {
                        month: dates.month,
                        year: dates.year,
                    }
                }
            }

        case "changeDateEnd":
            return {
                ...prevState,
                dates: {
                    ...prevState.dates,
                    end: {
                        month: dates.month,
                        year: dates.year,
                    }
                }
            }

        default:
            break;
    }

}

const reduceSimulatorOutputs = function (prevState, action) {

    const { result, fileName } = action.data;

    const today = new Date();
    const date = today.toLocaleDateString('es-HN');
    const time = today.toLocaleTimeString('es-HN');

    switch (action.type) {
        case "simulateResult":
            const results = prevState.slice();
            results.push({
                id: uuidv4(),
                date: date,
                time: time,
                result: result,
                fileName: fileName
            });

            return results;

        default:
            break;
    }

}


export {
    reduceSimulatorInputs,
    reduceSimulatorOutputs,
    defaultSimulatorDataInput,
    defaultSimulatorDataOutput
}