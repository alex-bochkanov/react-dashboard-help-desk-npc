import React, {memo} from 'react';
import {Link} from 'react-router-dom';

function NotFoundPageComp(): JSX.Element {
  return (
    <React.Fragment>
      <p>404 Not Found</p>
      <p>Перейти на <Link to="/">главную</Link> страницу.</p>
    </React.Fragment>
  );
}

const NotFoundPage = memo(NotFoundPageComp);

export default NotFoundPage;
