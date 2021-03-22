import './articles.css';

import {ARTICLES} from '../../data';
import classNames from 'classnames';

export function ArticleHeader(props) {
  return (
    <header className="article-header">
    {/* <div className='article-counter round'></div> */}
      <h4>{props.children}</h4>
    </header>
  );
}
export function ArticleText(props) {
  const {compact} = props;
  return <article className={classNames("article-text", {compact})}>{props.children}</article>;
}
export function Article(props) {
  return (
    <section className="article-section">
      <ArticleHeader>{props.title}</ArticleHeader>
      <ArticleText>{props.children}</ArticleText>
    </section>
  );
}

export function Articles() {
  return (
    <>
      {ARTICLES.map((article) => (
        <Article key={article.title} title={article.title}>
          {article.text}
        </Article>
      ))}
    </>
  );
}