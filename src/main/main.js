import Statistics from './statistics';
import {GetStartedBtn} from '../common/buttons/buttons';
import {ArticleText, Articles} from '../common/articles/articles';
import Opinions from './opinions/opinions';
import FancyContainer from '../common/fancyContainer/container';

export default function Main(props) {
  return (
    <main>
      <Statistics />

      <GetStartedBtn />

      <h1>Bring everyone together to build better products.</h1>
      <ArticleText>
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </ArticleText>

      <GetStartedBtn/>

      <h2>What’s different about Manage?</h2>
      <ArticleText>
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </ArticleText>

      <Articles />

      <Opinions />

      <GetStartedBtn/>
      
      <FancyContainer>
        Simplify how your team works today.
        <GetStartedBtn inverted={true} />
      </FancyContainer>
    </main>
  );
}
