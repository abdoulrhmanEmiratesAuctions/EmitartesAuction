export const getAllYears =  () => {
    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(50), (val, index) =>   (year - index).toString());
    return years;
}