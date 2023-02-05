import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import de from "date-fns/locale/de";
import { TextField } from "@mui/material";

export const DatePickerX: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const changeDate = (newDate: Date | null) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  return (
    <LocalizationProvider locale={de} dateAdapter={AdapterDateFns}>
      <DatePicker
        label="datepicker_label"
        value={date}
        inputFormat="yyyy/MM/dd"
        views={["year", "month", "day"]}
        mask="____/__/__"
        onChange={changeDate}
        renderInput={(params) => (
          <TextField
            type="text"
            {...params}
            data-testid="textInput_testid"
            name="textInput_name"
          />
        )}
      />
    </LocalizationProvider>
  );
};
