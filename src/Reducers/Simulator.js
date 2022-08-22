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

const defaultSimulatorDataOutput = {};

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

    const { file, fileName, data } = action.data;

    switch (action.type) {
        case "changeUserInputs":
            return {
                ...prevState,
                input: {
                    ...prevState.input,
                    file,
                    fileName,
                    data
                }
            }

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