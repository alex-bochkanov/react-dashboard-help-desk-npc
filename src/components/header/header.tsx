import { Link } from "react-router-dom";
function Header(): JSX.Element {
    return (
      <nav>
        <ul>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/section'>Разделы</Link></li>
            <li><Link to='/user'>Пользователи</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Header;