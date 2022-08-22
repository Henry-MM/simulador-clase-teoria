import React, { useContext, useEffect, useState } from 'react'
import { SimulatorInputContenxt } from '../../Contexts/Simulator';
import { getProductListFromInputData, getProductListSelectFormat } from '../../Helpers/simulatorUI';

const ControlSelectProduct = () => {

    const [inputData, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);

    useEffect(() => {

        const uniqueProductsList = getProductListFromInputData(inputData.inputFile.data);

        dispatchSimulatorInput({
            type: "changeProductList",
            data: {
                productList: uniqueProductsList
            }
        })

    }, [inputData.inputFile, dispatchSimulatorInput])


    const handleChangeSelectProduct = (evt) => {
        dispatchSimulatorInput({
            type: "changeSelectedProduct",
            data: {
                selectedProduct: evt.target.value
            }
        })
    };

    const { products } = inputData;
    const optionsProducts = getProductListSelectFormat(products.list);

    return (
        <div>
            <label className="dropdown__label">
                Articulo o Producto
                <select 
                    className="customSelectStyle"
                    value={products.selectedProduct} 
                    onChange={handleChangeSelectProduct}
                >
                    {optionsProducts.map(({ id, label, value }) => (
                        <option
                            value={value}
                            key={id}
                        >
                            {label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default ControlSelectProduct