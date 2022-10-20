import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg"
                alt={'img'}/>
            {
                props.isAuth
                    ? <span className={s.navlink}>{props.login}</span>
                    : <NavLink to={'/login'} className={s.navlink}>Login</NavLink>
            }
        </header>
    );
};

export default Header;
