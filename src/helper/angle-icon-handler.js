export const iconHandler =()=>{
    if (localStorage.getItem("lang") === 'en') {
        return 'fa fa-angle-right';
    } else if(localStorage.getItem("lang") === 'ar'){
        return 'fa fa-angle-left';
    }else{
        return 'fa fa-angle-right';
    }

}