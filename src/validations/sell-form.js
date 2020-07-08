export const validationSellFom = (state, lang) => {
    
    let error = {}
    var d = new Date();
    var year = d.getFullYear();

    const validationFullName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    if (state.fullName && !validationFullName.test(state.fullName)) {
        error.fullName  = lang === 'ar' ?  `برجاء ادخال الا سم صحيح  ` : `Please type your full name correct`
    }
    if ( state.fullName.length < 5 || state.fullName.length > 30)  {
        error.fullName  = lang === 'ar' ?  `يجب ان يكون الاسم اكتر من 5 حروف و اقل من 30 حرف` : `Please make sure greater than 5 character and less than 30 charachter`
    }
    const phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (state.mobile && !phoneValidation.test(state.mobile)) {
        error.mobile  = lang === 'ar' ?  `برجاء ادخال رقم الهاتف صحيح  ` : `Please type your mobile number correct`
    }
    
    if (state.year && (state.year < 1970 || state.year > year) ) {
        error.year  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار مابين 1970 و ${year}  ` : `Please type a year between 1970 & ${year}`
    }
    if (state.year.length !== 4) {
        error.year  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please make write a valid year`
    }
   
    if (!state.brand) {
       error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car make`
    }
 
    if (state.brand === 'DEFAULT') {
        error.brand = lang === 'ar' ?  `برجاء ادخال  ماركة السيارة` : `Please type a car make`
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
        error.modal  = lang === 'ar' ?  `برجاء ادخال  طراز السيارة  ` : `Please type your a car modal`
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


