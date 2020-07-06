export const fontForLang = () => {
    if (localStorage.getItem("lang") === 'en') {
        return 'Roboto'
    } else {
        return 'Almarai'
    }
}