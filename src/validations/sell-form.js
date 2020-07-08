export const validationSellFom = (state, lang) => {
    
    let error = {}
    var d = new Date();
    var year = d.getFullYear();
    if (state.year && (state.year < 1970 || state.year > year) ) {
        error.year  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار مابين 1970 و ${year}  ` : `Please type a year between 1970 & ${year}`
    }
    if (state.year.length !== 4) {
        error.year  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please make write a valid year`
    }
   
    if (!state.brand) {
       error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car brand`
    }
 
    if (state.brand === 'DEFAULT') {
        error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car brand`
    }
    if (!state.year) {
        error.year  = lang === 'ar' ? `برجاء ادخال سنة الصنع  ` : `Please type a Year` 
    }
    if (!state.fullName) {
        error.fullName  = lang === 'ar' ?  `برجاء ادخال الاسم بالكامل ` : `Please type your full name`
    }
    if (!state.mobile) {
        error.mobile  = lang === 'ar' ?  `برجاء ادخال  رقم الهاتف ` : `Please type your phone number`
    }
    if (!state.modal) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  طراز السيارة  ` : `Please type your car modal`
    }
  

    return error;
}

export const stateFields = (state) => {
    const data = {
        "FullName": state.fullName,
        "PhoneNumber": state.mobile,
        "Make": state.brand,
        "Model": state.modal,
        "Year": state.year,
        "EmiratesId": 1,
        "PlateCode": "",
        "PlateNumber": "",
        CustomerEmiratesId: 1
    }
    return data;

}