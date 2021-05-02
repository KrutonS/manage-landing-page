import './main.css';

import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import Community from './community/community';
import Careers from './careers/careers';
import About from './about/about';
import Pricing from './pricing/pricing';
import Product from './product/product';

export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/community">
					<Community />
				</Route>
				<Route path="/careers">
					<Careers />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/pricing">
					<Pricing />
				</Route>
				<Route path="/product">
					<Product />
				</Route>
			</Switch>
		</main>
	);
}
