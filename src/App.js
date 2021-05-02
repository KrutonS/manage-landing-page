import './reset.css';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './appHeader/header';
import Footer from './footer/footer';
import Main from './main/main';

import { MobileScreenContext } from './globals';

function useCheckIfMobileState() {
	const queryList = window.matchMedia('(min-width:1000px)');
	const [isMobile, setIsMobile] = useState(!queryList.matches);
	useEffect(() => {
		const listener = () => setIsMobile(!queryList.matches);
		queryList.addEventListener('change', listener);
		return () => queryList.removeEventListener('change', listener);
	}, [queryList]);
	return isMobile;
}
function App() {
	return (
		<Router basename="/manage-landing-page">
			<div className="App">
				<MobileScreenContext.Provider value={useCheckIfMobileState()}>
					<AppHeader />
					<Main />
					<Footer />
				</MobileScreenContext.Provider>
			</div>
		</Router>
	);
}

export default App;
