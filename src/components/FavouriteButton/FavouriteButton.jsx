import s from './FavouriteButton.module.css'

const FavouriteButton = ({isFavourite, onClick}) => {

    const svgIcon = '/symbol-defs.svg'

    return (
        <button className={s.icon_btn} onClick={onClick}>
            <svg width={16} height={16}>
                <use href={isFavourite ? `${svgIcon}#icon-heart-active` : `${svgIcon}#icon-heart`} />
            </svg>
        </button>
    )
}

export default FavouriteButton