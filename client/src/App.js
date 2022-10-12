import "./App.css";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import Palatte from "./components/Palatte";



function App() {

	const [activeColor, SetActiveColor] = useState('#282c34');

	useEffect(() =>{
		init();
		subscribe((color) => {
			SetActiveColor(color);
		});
	},[])


	return (
		<div className="App" style={{backgroundColor: activeColor}}>
			<h1>{activeColor}</h1>
			<Palatte activeColor={activeColor} />
		</div>
		
	);
}

export default App;
 