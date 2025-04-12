import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";


const Calendar = () => {

    const [value, setValue] = useState(dayjs('2022-04-17'));

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
                label="Booking date"
                PopperProps={{
                    className: 'calendar',
                    modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
              },
            },
                    ],
                    sx: {
            "& .MuiPaper-root": {
              width: "276px", 
              borderRadius: "12px",
              overflow: "hidden",
            },
          },
                }}
            format="LL"
            slots={{ textField: TextField }}
            slotProps={{
            textField: {
               fullWidth: true,
                    InputLabelProps: {
                        shrink: false,
                        sx: {
                            fontSize: '16px',
                            fontFamily: 'Manrope',
                            fontWeight: 500,
                            lineHeight: 1.25,
                            paddingLeft: '6px',
                            color: 'var(--gray)'
                        }
                    },
                sx: {
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
            },
          },
        }}
        />           
    </LocalizationProvider>
  );
}

export default Calendar