import React, { Component } from 'react'
import { InstructionStyle } from './instructions.style'
import { Button, Grid } from "@material-ui/core";
import { ContainerStyle } from '../../styles/container.style'
import { strings } from '../../localization/localization';


export default class Instructions extends Component {
    onPressStartToday = () => {
        const element = document.getElementById("form");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    render() {
        return (
            <div>
                <InstructionStyle>
                    <div className="sell-now-image">
                        <div className="words">
                            <p className="header">{strings.sellingYourCarNow}</p>
                            <p className="contain">{strings.easierThanEver}</p>
                        </div>
                        <div className="div-btn">
                            <Button onClick={this.onPressStartToday} className="btn-start" variant="contained">{strings.startToday}</Button>
                        </div>
                    </div>


                    <div  >
                        <Grid container spacing={0} className="grid-works">
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >

                                <ContainerStyle className="work">
                                    <h1 className="how-header">{strings.howItWorks}</h1>
                                    <p className="Sell-Your-Car-in-Thr">
                                       {strings.sellYourCarInThreeSimpleSteps}
                                        </p>

                                    <div className="header-sell">
                                        <div className="Bg-Circle"><p>1</p></div>
                                        <div className="content-sell">
                                            <p>{strings.submitYourCar}</p>
                                            <p className="content-smaller">{strings.enterYourCarDetails}</p>
                                        </div>
                                    </div>
                                    <div className="header-sell">
                                        <div className="Bg-Circle"><p>2</p></div>
                                        <div className="content-sell">
                                            <p>{strings.receiveOffer}</p>
                                            <p className="content-smaller">{strings.weWillCheckCar}</p>
                                        </div>
                                    </div>

                                    <div className="header-sell">
                                        <div className="Bg-Circle"><p>3</p></div>
                                        <div className="content-sell">
                                            <p>{strings.getThePayment}</p>
                                            <p className="content-smaller">{strings.afterPriceIsAgree}</p>
                                        </div>
                                    </div>

                                </ContainerStyle>

                            </Grid>
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >

                                <div className="image-red">
                                    <div className="content-sold">
                                        <img className="Bid_ic" src={require('../../assets/images/5650F6AA-AA66-48A8-B980-5AEF5F378141 (1).svg')} />

                                        <h2 className="header-sold">{strings.yourCarWillBeSold}</h2>
                                        <p className="desc-sold">{strings.startPriceItWillBeSold}</p>

                                    </div>


                                </div>

                            </Grid>
                        </Grid>


                    </div>
                </InstructionStyle>
            </div>
        )
    }
}
