import { useState, useEffect } from 'react';
import { urbitVisor } from '@dcspark/uv-core';
import Header from './components/Header';
import './App.css'

function App() {
	const [ship, setShip] = useState('');
	useEffect(() => {
		urbitVisor.require(['shipName'], setData);
	}, []);
	function setData() {
		urbitVisor.getShip().then((res) => setShip(res.response));
	}

	
	return (
		<div className="App">
			<Header />
			
		</div>
	); 
}

export default App
