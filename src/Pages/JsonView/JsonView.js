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

                <div className="">
                    <pre>
                        <code>
                            {JSON.stringify(inputFile.data, null, 10)}
                        </code>
                    </pre>
                </div>

                <div className="JsonView__buttons_container">
                    <Link to="/simulator">
                        <Button className="start_jsonView_btn">Regresar</Button>
                    </Link>
                </div>


                <TableContainer>
                    <Table variant="striped" colorScheme="">
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Año</Th>
                            <Th>Mes</Th>
                            <Th>Producto</Th>
                            <Th>Precio</Th>
                            <Th>Cantidad</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {
                                json.map((item, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{item.anio}</Td>
                                            <Td colspan="4">
                                                {
                                                    item.meses.map((mes, index) => {
                                                        return (
                                                            <Table variant="unstyled">
                                                                <Tbody>    
                                                                    <Tr key={index}>
                                                                        <Td>{mes.name}</Td>
                                                                        <Td>
                                                                            {
                                                                                mes.productos.map((prod, index) => (
                                                                                    <Table variant="unstyled">
                                                                                        <Tbody>
                                                                                            <Tr key={index}>
                                                                                                <Td>{prod.name}</Td>
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
                        <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                        </Tfoot>
                    </Table>
                    </TableContainer>

            </Content>

            

            <Footer />

        </div>
    )
}






export default JsonView