import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
}

const Header = () => {

    const svgIcon = '/symbol-defs.svg'
    
    return (
        <header className={s.container}>
            <div className={s.wrapper}>
                <svg width={104} height={16}>
                  <use href={`${svgIcon}#icon-Logo`} />
                </svg>
                <nav className={s.nav}>
                    <NavLink to='/' className={buildLinkClass}>Home</NavLink>
                    <NavLink to='/catalog' className={buildLinkClass}>Catalog</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header