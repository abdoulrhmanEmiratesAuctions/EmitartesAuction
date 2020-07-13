import React, { Fragment, useState, useEffect } from "react";
import { DatePicker, InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';
import { YearStyle } from "./year-input.style";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import moment from 'moment';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#ec1c24",
      },
    },
    MuiPickersCalendarHeader: {
    },
    MuiPickersDay: {
      day: {
      },
      daySelected: {
      },
      dayDisabled: {
      },
      current: {
      },
    },
    MuiPickersModal: {
      dialogAction: {
      },
    },
  },
});

function YearMonthPicker(props) {
    const [selectedDate, handleDateChange] = useState(moment().format("yyyy"));
    useEffect(() => {
        props.year(moment().format("yyyy"));

    }, [selectedDate])
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Fragment>
                <YearStyle className="picker">
                <ThemeProvider theme={materialTheme}>
                    <DatePicker
                        maxDate="2020-01-01"
                        minDate="1990-01-01"
                        disableFuture
                     
                        autoOk
                        views={["year"]}
                        value={selectedDate}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        onChange={(e, s) => {
                            if (moment(e).format("yyyy") <= moment().format("yyyy")) {
                                handleDateChange(moment(e).format("yyyy"));
                                props.year(moment(e).format("yyyy"));
                            }
                        }}

                        animateYearScrolling={false}
                    />
                    </ThemeProvider>
                </YearStyle>
            </Fragment>
        </MuiPickersUtilsProvider>

    );
}

export default YearMonthPicker;