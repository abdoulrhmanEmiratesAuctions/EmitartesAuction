export const validationSellFom = (state, lang) => {
    
    let error = {}
    if (!state.brand) {
       error.brand = lang === 'en' ? `Please Type A Car Brand` : `برجاء ادخال العلامة التجارية`
    }
    if (!state.modal) {
        error.modal  = lang === 'en' ? `Please Type A Car Brand` : `برجاء ادخال الاصدار `
    }
    if (!state.fullName) {
        error.fullName  = lang === 'en' ? `Please Type Your Full Name` : `برجاء ادخال الاسم بالكامل `
    }
    if (!state.mobile) {
        error.mobile  = lang === 'en' ? `Please Type Your Mobile Number` : `برجاء ادخال  رقم الهاتف `
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