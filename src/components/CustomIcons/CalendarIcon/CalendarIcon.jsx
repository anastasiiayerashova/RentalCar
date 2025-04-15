const CalendarIcon = () => {
    
    const svgIcon = '/symbol-defs.svg'

    return (
        <svg width={16} height={16} style={{ fill: 'var(--main)' }}>
          <use href={`${svgIcon}#icon-calendar`} />
        </svg>
    )
}

export default CalendarIcon