export const validationSellFom = (state, lang) => {
    
    let error = {}
    if (state.modal && (state.modal < 1980 || state.modal > 2020) ) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please Make Sure The Year Is Valid`
    }
    if (state.modal.length !== 4) {
        error.modal  = lang === 'ar' ?  `برجاء ادخال  سنة الاصدار صحيحه  ` : `Please Make Sure The Year Is Valid`

    }
   
    if (!state.brand || state.brand === 'Brand') {
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