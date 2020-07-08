export const validationSellFom = (state, lang) => {
    
    let error = {}
    var d = new Date();
    var year = d.getFullYear();
    if (state.modal && (state.modal < 1980 || state.modal > year) ) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار مابين 1980 و ${year}  ` : `Please type a year between 1980 & ${year}`
    }
    if (state.modal.length !== 4) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please make write a valid year`
    }
   
    if (!state.brand) {
       error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car brand`
    }
    if (state.brand === 'DEFAULT') {
        error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car brand`
    }
    if (!state.modal) {
        error.modal  = lang === 'ar' ? `برجاء ادخال طراز السيارة ` : `Please type a car model` 
    }
    if (!state.fullName) {
        error.fullName  = lang === 'ar' ?  `برجاء ادخال الاسم بالكامل ` : `Please type your full name`
    }
    if (!state.mobile) {
        error.mobile  = lang === 'ar' ?  `برجاء ادخال  رقم الهاتف ` : `Please type your phone number`
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