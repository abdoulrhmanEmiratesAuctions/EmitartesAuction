export const validationSellFom = (state) => {
    let error = {}
    if (!state.brand) {
        error.brand = "asd"
    }
    if (!state.modal) {
        error.modal = "asd"
    }
    if (!state.fullName) {
        error.fullName = "asd"
    }
    if (!state.mobile) {
        error.mobile = "asd"

    }
    return error;
}



export const stateFields = (state) => {
    const data = {
        "FullName": state.fullName,
        "PhoneNumber": state.mobile,
        "Make": state.brand,
        "Model": "",
        "Year": state.modal,
        "EmiratesId": 1,
        "PlateCode": "",
        "PlateNumber": ""
    }
    return data;

}