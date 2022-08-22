import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {

	return (
		<ChakraProvider>
			<div className="App">
				<Outlet />
			</div>
		</ChakraProvider>
	);
}

export default App;


/*
	const simulationRecord = [{
		index: 0,
		duration: 0,
		result: {},
		fileName: "test.json"
	}]
*/