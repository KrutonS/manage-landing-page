import './reset.css';
import './App.css';

// import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './appHeader/header';
import Footer from './footer/footer';
import Main from './main/main';
function App() {
	return (
		<Router basename="/manage-landing-page">
			<div className="App">
				<AppHeader />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
