import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
}

const Header = () => {
    return (
        <header className={s.container}>
            <div className={s.wrapper}>
                <p>RentalCar</p>
                <nav className={s.nav}>
                    <NavLink to='/' className={buildLinkClass}>Home</NavLink>
                    <NavLink to='/catalog' className={buildLinkClass}>Catalog</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header