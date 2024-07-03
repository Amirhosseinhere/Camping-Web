import './Header.css'

function Header() {
return (
<>
<header>
    <div className="container">
        <nav>
            <a href="#" className="app-logo">
                <img src="../public/svgs/logo.svg" alt="Camping web" className="app-logo_img" />
            </a>
            <ul className="menu">
            <li className="menu__item">
                <a href="#" className='menu__link'>Home</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Distination</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Naer me</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Events</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Blog</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Gallry</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>About</a>
            </li>

            <li className="menu__item">
                <a href="#" className='menu__link'>Contact us</a>
            </li>
        </ul>

        <div className="nav-menu">
        <ul className="mobile-menu">
            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Home</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Distination</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Naer me</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Events</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Blog</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Gallry</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>About</a>
            </li>

            <li className="mobile-menu__item">
                <a href="#" className='mobile-menu__link'>Contact us</a>
            </li>
        </ul>
        <div className="nav-menu__links">
            <a href="#" className="nav-menu__link">Sign up</a>
            <a href="#" className="nav-menu__link nav-menu__link--border">Sign in</a>
        </div>
        </div>

        <div className="header__links">
            <a href="#" className="header__link">Sign up</a>
            <a href="#" className="header__link header__link--border">Sign in</a>
        </div>

        <div className="nav__btn">
            <spna className="nan__btn-line"></spna>
        </div>
        </nav>
    </div>
</header>
</>
)
}

export default Header