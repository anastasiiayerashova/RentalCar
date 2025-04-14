import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import CalendarIcon from "../CalendarIcon/CalendarIcon.jsx";
import dayjs from "dayjs";
import { datePickerPopperSx, datePickerInputLabelSx, datePickerTextFieldSx } from "../../styles.js/muiStyles.js";

const Calendar = ({ value, onChange }) => {
    
    // при открытии календаря перезаписываем дни недели на кастомные

    const handleOpen = () => {
     
    setTimeout(() => {
        
      const weekNames = document.querySelectorAll(
        '.MuiDayCalendar-header span.MuiTypography-root'
    );

    const finalResult = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    weekNames.forEach((el, i) => {
      el.textContent = finalResult[i];
    })
        
  }, 0)
}

return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
            <DesktopDatePicker onOpen={handleOpen}
                value={value}
                onChange={onChange}
                label="Booking date"
                minDate={dayjs()}
                PopperProps={{
                    className: 'calendar',
                    sx: datePickerPopperSx
                }}
                format={value ? 'LL' : ''} 
                slots={{ textField: TextField, openPickerIcon: CalendarIcon }}
                slotProps={{
                    textField: {
                        fullWidth: true,
                        InputLabelProps: {
                            shrink: value !== null,
                            sx: datePickerInputLabelSx
                        },
                        sx: datePickerTextFieldSx
                    },
                }}
            />           
    </LocalizationProvider>
  );
}

export default Calendar