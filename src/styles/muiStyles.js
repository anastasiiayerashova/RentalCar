export const menuItemSx = {
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: 'var(--main)',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'transparent', 
  },
};


export const formControlSx = {
    backgroundColor: 'var(--inputs)',
    maxWidth: '204px',
    borderRadius: '12px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            fontFamily: 'Manrope', 
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: 1.25,
            color: 'var(--main)',
            padding: '12px 16px',
            width: '204px',
            height: '40px',
            boxShadow: 'none',
                '& fieldset': {
                    border: 'none'
                }
        }
}


export const menuPropsSx = {
    PaperProps: {
        sx: {
        mt: '4px',
        width: '204px',
        height: '272px',
        backgroundColor: 'var(--white)',
        padding: '18px 0 18px 14px',
        borderRadius: '12px',
        border: '1px solid var(--inputs)',
        boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
        '& ul': {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '8px',
            padding: 0,
                '& li': {
                    color: 'var(--gray)',
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.25,
                    padding: 0,
                    height: '20px',
                    minHeight: '20px',
                        '&:hover, &:focus': {
                            backgroundColor: 'transparent'
                        },
                },
        },
        '&::-webkit-scrollbar': {
            width: '24px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundClip: 'content-box',
            backgroundColor: 'var(--gray-light)',
            borderRadius: '24px',
            border: '8px solid transparent',
        },
        },
    }
}


export const menuPricePropsSx = {
    PaperProps: {
        sx: {
        maxHeight: '160px',
        width: '204px',
        backgroundColor: 'var(--white)',
        padding: '18px 0 18px 14px',
        borderRadius: '12px',
        border: '1px solid var(--inputs)',
        boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
        '& ul': {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '8px',
            padding: 0,
                '& li': {
                    color: 'var(--gray)',
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.25,
                    padding: 0,
                    height: '20px',
                    minHeight: '20px',
                        '&:hover, &:focus': {
                            backgroundColor: 'transparent'
                        },
                },
        },
        '&::-webkit-scrollbar': {
            width: '24px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundClip: 'content-box',
            backgroundColor: 'var(--gray-light)',
            borderRadius: '24px',
            border: '8px solid transparent',
        },
        },
    }
}


export const bookingSnackbarSx = {
    width: '100%', 
    marginTop: '10px',
}


export const bookingAlertSx = {
    width: '100%', height: '100%',
    fontFamily: 'Manrope',
    fontSize: '16px',
    lineHeight: 1.25,
    fontWeight: 400,
    borderRadius: '14px',
    backgroundColor: '#A5D6A7',
    color: 'var(--white)',
    border: 'none'     
}


export const datePickerPopperSx = {
    "& .MuiPaper-root": {
        width: "276px", 
        borderRadius: "14px",
        overflow: "hidden",
    },
}


export const datePickerTextFieldSx = {
    '& .MuiOutlinedInput-root': {
        textAlign: 'center',
        color: 'var(--gray)', 
        backgroundColor: 'var(--inputs)',
        borderRadius: '12px',
        padding: '12px 20px',
        height: '48px',
            '& fieldset': {
                border: 'none'
            },
            '& .MuiSvgIcon-root': {
                color: 'var(--gray)',
                width: '20px',
                height: '20px'
            },
    },
}


export const datePickerInputLabelSx = {
    fontSize: '16px',
    fontFamily: 'Manrope',
    fontWeight: 500,
    lineHeight: 1.25,
    paddingLeft: '6px',
    color: 'var(--gray)'
}


export const carListSnackbarSx = {
    width: '100%', 
    height: '50px', 
    marginTop: '10px',
    fontSize: '16px',
}


export const carListAlertSx = {
    width: '100%', height: '100%',
    fontFamily: 'Manrope',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: 1.25,
    fontWeight: 500,
    borderRadius: '14px',
    backgroundColor: '#FAC898',
    color: 'var(--main)',
    border: 'none'
}
