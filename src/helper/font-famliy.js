export const fontForLang = () => {
    if (localStorage.getItem("lang") === 'ar') {
        return 'Almarai'
    } else {
        return 'Roboto'
    }
}

export const fontForLangRobotoMedium = () => {
    if (localStorage.getItem("lang") === 'ar') {
        return 'Almarai-Bold'
    } else {
        return 'Roboto-Meduim'
    }
}





