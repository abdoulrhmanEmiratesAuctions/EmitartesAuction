import React, { Fragment, useState, useEffect } from "react";
import { DatePicker, InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';
import { YearStyle } from "./year-input.style";
import * as moment from "moment";
function YearMonthPicker(props) {
    const [selectedDate, handleDateChange] = useState(moment().format("yyyy"));
    useEffect(() => {
        props.year(moment().format("yyyy"));

    }, [selectedDate])
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Fragment>
                <YearStyle className="picker">
                    <DatePicker
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

                        animateYearScrolling
                    />
                </YearStyle>
            </Fragment>
        </MuiPickersUtilsProvider>

    );
}

export default YearMonthPicker;