import React, { Component } from 'react'
import { FormStyle } from './form.style'
import { Grid, Button } from '@material-ui/core'
import { strings } from '../../localization/localization'

export default class Form extends Component {
    renderInputs = () => {

    }
    render() {
        return (
            <FormStyle id="form">
                <div className="header">
                    <h2>{strings.startToday}</h2>
                    <p>{strings.youAreJustOneClick}</p>
                </div>
                <Grid container spacing={0} className="container" >
                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ padding: '20px' }}


                    >
                        <div className="image-video">
                            <div className="Bg-Circle">
                                <img className="icon-play" src={require('../../assets/images/18225C47-54D9-4099-94F6-94E2EC837565.svg')} />

                            </div>
                        </div>
                        <div className="video-desc">
                            <h1>{strings.whyYouShouldSellYourCar}</h1>
                            <h6>{strings.weSupportYouFromStartToFinish} </h6>
                            <h5>
                                {strings.weHaveStreamlind}
                            </h5>
                            <p>{strings.readyToSell}</p>
                        </div>
                    </Grid>

                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        style={{ padding: '20px' }}


                    >
                        <div className="inputs">
                            <div className="header-input">  {strings.enterCarDetail}</div>

                            <div className="form-group">
                                <div className="label"><label className="">{strings.carBrand}</label></div>
                                <input type="text" className="input" placeholder={strings.carBrand} />
                            </div>

                            <div className="form-group">
                                <div className="label"><label className="">{strings.carModel}</label></div>
                                <input type="text" className="input" placeholder={strings.carModel} />
                            </div>
                            <div className="label"></div>
                            <div className="header-input">  {strings.enterYourContactInfo}</div>

                            <div className="form-group">
                                <div className="label"><label className="">{strings.yourFullName}</label></div>
                                <input type="text" className="input" placeholder={strings.yourFullName} />
                            </div>

                            <div className="form-group">
                                <div className="label"><label className="">{strings.yourMobileNumber}</label></div>
                                <input type="text" className="input" placeholder={strings.yourMobileNumber} />
                            </div>

                        </div>

                        <div className="btn-submit">
                            <Button className="btn-send" variant="contained">{strings.sendYourInquiry}
                           <i className="fa fa-angle-right	"></i>
                            </Button>

                        </div>
                    </Grid>

                </Grid>
            </FormStyle>
        )
    }
}
