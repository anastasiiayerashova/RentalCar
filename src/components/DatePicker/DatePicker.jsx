import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import { useState } from "react";

const Calendar = () => {

    const handleOpen = () => {
     
    setTimeout(() => {
      const weekLabels = document.querySelectorAll(
        '.MuiDayCalendar-header span.MuiTypography-root'
    );

    const labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    weekLabels.forEach((el, i) => {
      el.textContent = labels[i];
    })
        
  }, 0)
}

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    };

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
            <DesktopDatePicker onOpen={handleOpen}
                value={selectedDate}
                onChange={handleDateChange}
                label="Booking date"
                PopperProps={{
                    className: 'calendar',
                    sx: {
                    "& .MuiPaper-root": {
                    width: "276px", 
                    borderRadius: "14px",
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
                        shrink: selectedDate !== null,
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