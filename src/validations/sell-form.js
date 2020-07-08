export const validationSellFom = (state, lang) => {
    
    let error = {}
    var d = new Date();
    var year = d.getFullYear();
    if (state.modal && (state.modal < 1980 || state.modal > year) ) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار مابين 1980 و ${year}  ` : `Please Make The Year Between 1980 & ${year}`
    }
    if (state.modal.length !== 4) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please Make Sure The Year Is Valid`
    }
   
    if (!state.brand) {
       error.brand = lang === 'ar' ?  `برجاء ادخال العلامة التجارية` : `Please Type A Car Brand`
    }
    if (state.brand === 'DEFAULT') {
        error.brand = lang === 'ar' ?  `برجاء ادخال العلامة التجارية` : `Please Type A Car Brand`
    }
    if (!state.modal) {
        error.modal  = lang === 'ar' ? `برجاء ادخال الاصدار ` : `Please Type A Car Brand` 
    }
    if (!state.fullName) {
        error.fullName  = lang === 'ar' ?  `برجاء ادخال الاسم بالكامل ` : `Please Type Your Full Name`
    }
    if (!state.mobile) {
        error.mobile  = lang === 'ar' ?  `برجاء ادخال  رقم الهاتف ` : `Please Type Your Mobile Number`
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