import "./main.css";

import Statistics from "./statistics";
import { GetStartedBtn } from "../common/buttons/buttons";
import { ArticleText, Articles } from "../common/articles/articles";
import Opinions from "./opinions/opinions";
import FancyContainer from "../common/fancyContainer/container";
function GridSection(props) {
	return (
		<section className={"grid-section " + props.className}>{props.children}</section>
	);
}
function MainGrid(props) {
	return (
		<div className='main-grid'>
			<GridSection className='statistics'>
				<Statistics />
			</GridSection>
			<GridSection className='order1'>
				<h1>Bring everyone together to build better products.</h1>
				<ArticleText compact>
					Manage makes it simple for software teams to plan day-to-day tasks while keeping
					the larger team goals in view.
				</ArticleText>
				<GetStartedBtn />
			</GridSection>

			<GridSection class='left'>
				<h2>What’s different about Manage?</h2>
				<ArticleText compact>
					Manage provides all the functionality your team needs, without the complexity.
					Our software is tailor-made for modern digital product teams.
				</ArticleText>
			</GridSection>

			<GridSection class='right'>
				<Articles />
			</GridSection>
		</div>
	);
}
export default function Main(props) {
	return (
		<main>
			<MainGrid />
			<Opinions />
			<GetStartedBtn />
			<FancyContainer>
				<h2>Simplify how your team works today.</h2>
				<GetStartedBtn inverted />
			</FancyContainer>
		</main>
	);
}
