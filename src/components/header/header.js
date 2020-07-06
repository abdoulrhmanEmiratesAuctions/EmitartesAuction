import React, { Component } from 'react'
import { HeaderStyle } from './header.style'
import { Button } from "@material-ui/core";
import {  strings} from '../../localization/localization';
import { getLang } from '../../services/lang';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            lang: null
        }
    }
    onPressLang = () => {
        const lang  = localStorage.getItem("lang") || 'en';
        if (lang === 'en') {
            strings.setLanguage('ar');
            document.body.style.direction = "rtl";

             localStorage.setItem("lang", 'ar');
             getLang('ar')

        } else {
            strings.setLanguage('en');
            document.body.style.direction = "ltr";
            localStorage.setItem("lang", 'en');
            getLang('en')

        }
        this.setState({});

    }
    componentDidMount(){
        this.setState({lang: localStorage.getItem("lang") || 'en'}, () => {
            if (this.state.lang) {
                strings.setLanguage(this.state.lang);
                if (this.state.lang === 'en') {
                    document.body.style.direction = "ltr";
                } else {
                    document.body.style.direction = "rtl";

                }
                this.setState({})
                getLang(this.state.lang);


            } else {
                strings.setLanguage('en');
                localStorage.setItem("lang", 'en');
            }
        })
    }
  
    render() {
        return (
            <HeaderStyle>
                <img src={require('../../assets/images/E1E48E11-3B18-46C3-A7FF-254C0D7664D1.svg')} />

                <Button className="btn-lng" color="secondary" variant="contained" onClick={() => {this.onPressLang()}}>{strings.lang}</Button>

            </HeaderStyle>
        )
    }
}
