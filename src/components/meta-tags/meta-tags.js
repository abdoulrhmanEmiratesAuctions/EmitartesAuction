import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { observableLang } from '../../services/lang';

export default class MetaTags extends Component {
    componentDidMount() {
        observableLang.subscribe((Res) => {
            if (localStorage.getItem("lang") === 'ar') {
                this.renderArabicLang();
            } else {
                this.renderEnglishLang();
            }
            this.setState({});
        });
    }
    renderArabicLang = () => {
        return (<div>
            <Helmet>
                <title>بيع سيارتك المستعملة | الإمارات للمزادات | شركة رائدة في مجال المزادات</title>
                <meta name="title" content="بيع سيارتك المستعملة | الإمارات للمزادات | شركة رائدة في مجال المزادات" />
                <meta name="description" content="بيع سيارتك المستعملة من خلال الإمارات للمزادات أكبر سوق لمزادات السيارات في الإمارات العربية المتحدة" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={process.env.PUBLIC_URL +  'favicon.ico'} />

                <link rel="apple-touch-icon" href={process.env.PUBLIC_URL +  'logo192.png'} />

                <meta name="Keywords" content="سيارات مستعملة, مركبات للبيع, حراج عربات, سوق سيارات, بيع سيارات مستعملة, مواقع بيع سيارات,  سيارات مستعملة للبيع في الامارات, حراج السيارات, بيع مركبات مستعملة" />
                <meta name="Keywords" content="Used Cars For Sale, Sell My Car, Sell Cars Websites, Cars Market, Sell used Vehicles, Sell you motor, sell used motor, best car price, second hand cars, used cars" />


                <meta property="og:title" content="Sell your car in Auction بيع السيارات بالمزاد" />
                <meta property="og:site_name" content="www.emiratesaution.com" />
                {/* <meta property="og:url" content="[PUT PAGE URL HERE]"> */}
                <meta property="og:description" content="Sell your car online via Emirates auction to get the best prices اعرض سيارتك للبيع في المزاد من اجل الحصول على افضل سعر " />
                <meta property="og:type" content="business.website" />
                {/* <meta property="og:image" content="[PUT IMAGE URL HERE]"/> */}

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="[PUT PAGE URL HERE]" />
                <meta property="twitter:title" content="Sell your car in Auction بيع السيارات بالمزاد" />
                <meta property="twitter:description" content="Sell your car online via Emirates auction to get the best prices اعرض سيارتك للبيع في المزاد من اجل الحصول على افضل سعر" />
                {/* <meta property="twitter:image" content="[PUT IMAGE URL HERE]"/>  */}

            </Helmet>
        </div>)
    }
    renderEnglishLang = () => {
        return (
            <div>
               <Helmet>
               <title>Sell any car online | Emirates Auction | The Leading Auction Company in UAE</title>
                <meta name="title" content="Sell any car online | Emirates Auction | The Leading Auction Company in UAE" />
                <meta name="description" content="Get the best price for your car on Emirates Auction and put it on the biggest car auction in the United Arab of Emirates" />
                <meta name="Keywords" content="Used Cars For Sale, Sell My Car, Sell Cars Websites, Cars Market, Sell used Vehicles, Sell you motor, sell used motor, best car price, second hand cars, used cars" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={process.env.PUBLIC_URL +  'favicon.ico'} />
                <link rel="apple-touch-icon" href={process.env.PUBLIC_URL +  'logo192.png'} />



                <meta property="og:title" content="Sell your car in Auction بيع السيارات بالمزاد" />
                <meta property="og:site_name" content="www.emiratesaution.com" />
                <meta property="og:url" content="[PUT PAGE URL HERE]" />
                <meta property="og:description" content="Sell your car online via Emirates auction to get the best prices اعرض سيارتك للبيع في المزاد من اجل الحصول على افضل سعر " />
                <meta property="og:type" content="business.website" />
                <meta property="og:image" content="[PUT IMAGE URL HERE]" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="[PUT PAGE URL HERE]" />
                <meta property="twitter:title" content="Sell your car in Auction بيع السيارات بالمزاد" />
                <meta property="twitter:description" content="Sell your car online via Emirates auction to get the best prices اعرض سيارتك للبيع في المزاد من اجل الحصول على افضل سعر" />
                <meta property="twitter:image" content="[PUT IMAGE URL HERE]" />
               </Helmet>
            </div>
        )
    }

    render() {
        return (
            <div>
                {localStorage.getItem("lang") === 'ar' ? this.renderArabicLang() : this.renderEnglishLang()}
            </div>
        )
    }
}
