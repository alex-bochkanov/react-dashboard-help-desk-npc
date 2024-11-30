import Header from '../../components/header/header';
import { Section } from '../../types/section-type';
import { User } from '../../types/user-type';

type Props = {
    users: User[];
    sections: Section[];
}

function IndexPage(props: Props): JSX.Element {
    const {users, sections} = props;
    return (
        <div className="page page-main">
            <Header />
            Главная страница
            {users.map((user) => (
                <div key={user.id}>{user.id}{user.name}{user.avatar}{user.dateOfBirth}{user.department}{user.email}{user.gender}{user.level}{user.phone}{user.position}{user.workFormat}</div>
            ))}
            {sections.map((section) => (
                <div key={section.idSection}>{section.idSection}{section.title}</div>
            ))}
        </div>
    );
}
export default IndexPage;
