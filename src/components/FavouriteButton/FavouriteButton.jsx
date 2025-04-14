import s from './FavouriteButton.module.css'

const FavouriteButton = ({isFavourite, onClick}) => {

    const svgIcon = '/symbol-defs.svg'

    return (
        <button className={s.icon_btn} onClick={onClick}>
           {isFavourite ? (
              <svg width={16} height={16} viewBox="0 0 32 32">
                 <path fill="#3470ff" d="M16 29s-13-8.35-13-17.38C3 6.42 8.42 3 13.12 5.46 15.21 6.57 16 8.28 16 8.28s0.79-1.71 2.88-2.82C23.58 3 29 6.42 29 11.62 29 20.65 16 29 16 29z"/>
              </svg>
            ) : (
              <svg width={16} height={16}>
                 <use href={`${svgIcon}#icon-heart`} />
              </svg>
            )}
        </button>
    )
}

export default FavouriteButton