import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {

	return (
<<<<<<< HEAD
		<ChakraProvider theme={theme}>
=======
		<ChakraProvider>
>>>>>>> Hespinoza
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