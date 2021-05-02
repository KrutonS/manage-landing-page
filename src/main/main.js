import './main.css';

import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import Community from './community/community';
import Careers from './careers/careers';
import About from './about/about';
import Pricing from './pricing/pricing';
import Product from './product/product';
import { homepage } from '../globals';

export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path={homepage}>
					<Home />
				</Route>
				<Route path={`${homepage}/community`}>
					<Community />
				</Route>
				<Route path={`${homepage}/careers`}>
					<Careers />
				</Route>
				<Route path={`${homepage}/about`}>
					<About />
				</Route>
				<Route path={`${homepage}/pricing`}>
					<Pricing />
				</Route>
				<Route path={`${homepage}/product`}>
					<Product />
				</Route>
			</Switch>
		</main>
	);
}
