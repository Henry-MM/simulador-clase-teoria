import React, { useContext } from 'react'
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import "./JsonView.css";
import { SimulatorInputContenxt } from '../../Contexts/Simulator';

const json = [
    {
        "anio": "2020",
        "meses": [
            {
                "name": "Enero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            },
        ]  
    },
     {
        "anio": "2021",
        "meses": [
            {
                "name": "Enero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            },{
                "name": "Febrero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            }
        ]  
    },
    {
        "anio": "2023",
        "meses": [
            {
                "name": "Enero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            },{
                "name": "Febrero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            }
        ]  
    },
    {
        "anio": "2024",
        "meses": [
            {
                "name": "Enero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            },{
                "name": "Febrero",
                "productos": [
                    {
                        "id": "1",
                        "name": "Producto 1",
                        "precio": "1",
                        "cantidad": "1"
                    }
                ]

            }
        ]  
    }
]



const JsonView = () => {

    const [inputData, dispatchSimulatorInput] = useContext(SimulatorInputContenxt);
    const { inputFile } = inputData;

    return (
        <div className="JsonView">
            <Header />
            <Content className="JsonView__content">

                <TableContainer>
                    <Table variant="striped" colorScheme="">
                        <Thead>
                        <Tr>
                            <Th>Año</Th>
                            <Th style={{width:"30%"}}>Mes</Th>
                            <Th>Producto</Th>
                            <Th>Precio</Th>
                            <Th>Cantidad</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {
                                inputFile.data.map((item, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{item.año}</Td>
                                            <Td colspan="4">
                                                {
                                                    item.meses.map((mes, index) => {
                                                        return (
                                                            <Table variant="striped" colorScheme="#14213D" className="monthTable">
                                                                <Tbody>    
                                                                    <Tr key={index}>
                                                                        <Td>{mes.nombre}</Td>
                                                                        <Td>
                                                                            {
                                                                                mes.productos.map((prod, index) => (
                                                                                    <Table variant="unstyled" colorScheme="#14213D" className="productTable">
                                                                                        <Tbody>
                                                                                            <Tr key={index}>
                                                                                                <Td>{prod.nombre}</Td>
                                                                                                <Td>{prod.precio}</Td>
                                                                                                <Td>{prod.cantidad}</Td>
                                                                                            </Tr>
                                                                                        </Tbody>
                                                                                    </Table>
                                                                                ))
                                                                            }
                                                                        </Td>
                                                                    </Tr>
                                                                </Tbody>
                                                            </Table>
                                                        )
                                                    })
                                                }
                                            </Td>
                                        </Tr>
                                    )
                                } )
                            }
                        </Tbody>
                    </Table>
                    </TableContainer>

                <div className="JsonView__buttons_container">
                    <Link to="/simulator">
                        <Button className="start_jsonView_btn">Regresar</Button>
                    </Link>
                </div>


                

            </Content>

            

            <Footer />

        </div>
    )
}






export default JsonView