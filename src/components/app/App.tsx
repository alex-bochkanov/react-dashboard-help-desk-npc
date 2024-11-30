import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import IndexPage from '../../pages/index-page/index-page';
import UsersPage from '../../pages/users-page/users-page';
import DetailUserPage from '../../pages/detail-user-page/detail-user-page';
import SectionsPage from '../../pages/sections-page/sections-page';
import DetailSectionPage from '../../pages/detail-section-page/detail-section-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { User } from '../../types/user-type';
import { Section } from '../../types/section-type';

type Props = {
  users: User[];
  sections: Section[];
}

function App({users, sections}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Index}
          element={<IndexPage users={users} sections={sections} />}
        />
        <Route
          path={`${AppRoute.User}`}
          element={<UsersPage />}
        />
        <Route
          path={`${AppRoute.User}/:id`}
          element={<DetailUserPage />}
        />
        <Route
          path={`${AppRoute.Section}`}
          element={<SectionsPage />}
        />
        <Route
          path={`${AppRoute.Section}/:id`}
          element={<DetailSectionPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
