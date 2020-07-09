import React, { Component } from 'react'
import { FormStyle } from './form.style'
import { Grid, Button, TextField } from '@material-ui/core'
import Autocomplete from "@material-ui/lab/Autocomplete";

import { strings } from '../../localization/localization'
import { validationSellFom, stateFields } from '../../validations/sell-form';
import { sellCarAction } from '../../redux/actions/sell.action';
import { connect } from 'react-redux';
import { observableLang } from '../../services/lang';
import { fontForLang } from '../../helper/font-famliy';
import { iconHandler } from '../../helper/angle-icon-handler';
import { Player, BigPlayButton } from 'video-react';
import { getBrandAction } from '../../redux/actions/brand.action';
import Loader from '../loader/loader'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            modals: [],
            showLoader: false,
            error: { brand: "", modal: "", fullName: "", mobile: "", year: "" },
            responseError: false,
            responseSuccess: false,
            disabled: false,
            brand: "",
            modal: "",
            fullName: "",
            mobile: "",
            year: ""
        }
    }
    componentDidMount() {
        observableLang.subscribe((Res) => {
            this.setState({ responseError: false, error: { brand: "", modal: "", fullName: "", mobile: "", year: "" }, });
        });
        this.props.getBrandAction();

    }
    onChangeValueInput = (value, state, placeholder, lang) => {
        if (value && value !== 'DEFAULT') {
            this.setState({ [state]: value, error: { ...this.state.error, [state]: "" } });
        } else {
            this.setState({ [state]: value, error: { ...this.state.error, [state]: lang === 'ar' ? `برجاء ادخال ${placeholder}` : `Please type  ${placeholder}` } })
        }
    }

    renderInputs = (type, state, placeholder) => {
        return (
            <div className="form-group">
                <div className="label"><label className="" style={{ fontFamily: fontForLang() }}>{placeholder}</label></div>
                <input type={type}
                    style={{
                        fontFamily: fontForLang(),
                        borderColor: this.state.error[state] ? '#ec1c24' : '',
                        backgroundColor: this.state.error[state] ? 'rgba(236, 28, 36, 0.04)' : '',
                        borderRadius: this.state.error[state] ? '5px 5px 0px 0px' : '',
                    }}
                    onChange={(e) => this.onChangeValueInput(e.target.value, state, placeholder, localStorage.getItem("lang"))}
                    onBlur={(e) => this.onChangeValueInput(e.target.value, state, placeholder, localStorage.getItem("lang"))}
                    className={`input ${state === 'fullName' ? 'foucs' : ''}`} placeholder={state === 'year' ? strings.yearPlaceHolder : placeholder} />
                {
                    this.state.error[state] ? <div className="error-validation" style={{ fontFamily: fontForLang() }} > <p>{this.state.error[state]}</p></div> : ""
                }
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className="inputs">

            {
                this.state.responseSuccess ?
                    <div className="card-success">
                        <div className="card-header">
                            <img alt="image_3" src={require('../../assets/images/3739DED4-8F85-4F9D-BE06-DE2E456DD8E3.svg')} />
                        </div>

                        <div className="card-content">
                            <p style={{ fontFamily: fontForLang() }} className="done-desc">{strings.successHeader}</p>
                            <p style={{ fontFamily: fontForLang() }} className="done-content">{strings.successContent}</p>
                        </div>

                        <div className="btn-submit-resend">
                            <Button style={{ fontFamily: fontForLang() }} className="btn-send" variant="contained" onClick={() => this.onPressReSend()}>{strings.sendNewInquiry}
                                <i className={iconHandler()}></i>
                            </Button>
                        </div>
                    </div>
                    :
                    <div>
                        {this.state.responseError ? <div style={{ fontFamily: fontForLang() }} className="error-toast"><p>{strings.errorMsgResponse}</p></div> : ""}
                        {/* <div style={{ fontFamily: fontForLang() }} className="header-input">  {strings.enterCarDetail}</div> */}

                        <div className="form-group">
                            <div className="label" style={{ marginTop: '0px' }}><label className="" style={{ fontFamily: fontForLang() }}>{strings.carBrand}</label></div>
                            <Autocomplete
                                options={this.state.brands}
                                style={{ border: '0px', color: '#595f6f', }}
                                getOptionLabel={(option) => option.Make}
                                onChange={(e, newValue) => { this.setState({ modals: newValue.Models, brand: newValue.Make, error: { ...this.state.error, brand: '' } }) }}
                                onBlur={() => {
                                    if (!this.state.brand) {
                                        const lang = localStorage.getItem("lang");
                                        this.setState({ error: { ...this.state.error, brand: lang === 'ar' ? `برجاء ادخال ${strings.carBrand}` : `Please type  a ${strings.carBrand}` } })
                                    } else {
                                        this.setState({ error: { ...this.state.error, brand: '' } })

                                    }
                                }}

                                renderInput={(params) => <TextField style={{ padding: '0px 10px' }} className="input" {...params} placeholder={strings.carBrand} variant="outlined" />}
                            />
                            {
                                this.state.error.brand ? <div className="error-validation" style={{ fontFamily: fontForLang() }} ><p>{this.state.error.brand}</p>
                                </div> : ""
                            }
                        </div>

                        <div className="form-group">
                            <div className="label"><label className="" style={{ fontFamily: fontForLang() }}>{strings.carModel}</label></div>
                            <Autocomplete
                                options={this.state.modals}
                                style={{ border: '0px', color: '#595f6f', }}
                                getOptionLabel={(option) => option}
                                onChange={(e, newValue) => { this.setState({ modal: newValue, error: { ...this.state.error, modal: '' } }) }}
                                onBlur={() => {
                                    if (!this.state.modal) {
                                        const lang = localStorage.getItem("lang");
                                        this.setState({ error: { ...this.state.error, modal: lang === 'ar' ? `برجاء ادخال ${strings.carModel}` : `Please type a  ${strings.carModel}` } })
                                    } else {
                                        this.setState({ error: { ...this.state.error, modal: '' } })

                                    }
                                }}
                                renderInput={(params) => <TextField style={{ padding: '0px 10px' }} className="input" {...params} placeholder={strings.carModel} variant="outlined" />}
                            />
                            {
                                this.state.error.modal ? <div className="error-validation" style={{ fontFamily: fontForLang() }} ><p>{this.state.error.modal}</p>
                                </div> : ""
                            }
                        </div>
                        {this.renderInputs("number", "year", strings.year)}

                        <div className="label"></div>
                        {/* <div className="header-input" style={{ fontFamily: fontForLang() }} >  {strings.enterYourContactInfo}</div> */}
                        {this.renderInputs("text", "fullName", strings.yourFullName)}
                        {this.renderInputs("number", "mobile", strings.yourMobileNumber)}

                        <div className="btn-submit">
                            <Button style={{ fontFamily: fontForLang() }} disabled={this.state.disabled} className="btn-send" variant="contained" onClick={() => this.onPressSend()}>{strings.sendYourInquiry}
                                <i className={iconHandler()}></i>
                            </Button>
                        </div>
                    </div>
            }
        </div>
        )
    }

    render() {
        return (
            <FormStyle id="form" >
                <div className="header">
                    <h2 style={{ fontFamily: fontForLang() }}>{strings.startToday}</h2>
                    <p style={{ fontFamily: fontForLang() }}>{strings.youAreJustOneClick}</p>
                </div>
                <Grid container spacing={0} className="container" >
                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        style={{ padding: '0px 20px' }}
                    >
                        <Player
                            playsInline={false}
                            height={420}
                            width={"100%"}
                            fluid={false}
                            poster={require(`../../assets/images/ferrada_red_matte_bmw_m4_5k-t2.jpg`)}
                            src={require('../../assets/videos/sellYourCar.mp4')}>
                            <BigPlayButton position="center" />
                        </Player>

                        <div className="video-desc">
                            <h1 style={{ fontFamily: fontForLang() }}>{strings.whyShouldYouSellYourCar}</h1>
                            <h6 style={{ fontFamily: fontForLang() }}>{strings.weSupportYouFromStartToFinish} </h6>
                            <h5 style={{ fontFamily: fontForLang() }}>{strings.weHaveStreamlind}</h5>
                            <p style={{ fontFamily: fontForLang() }}>{strings.readyToSell}</p>
                        </div>
                    </Grid>

                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"

                        style={{ padding: '0px 20px', position: 'relative' }}
                    >
                        {this.state.showLoader == true && <Loader />}

                        {
                            !this.state.showLoader && this.renderForm()
                
                        }
                    </Grid>

                </Grid>
            </FormStyle>
        )
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.car.response && nextProps.car.response) {
            if (nextProps.car.response.message === "Network Error") {
                this.setState({ responseError: true, disabled: false, showLoader: false });
            } else {
                this.setState({ responseSuccess: true, disabled: false, responseError: false, showLoader: false });
            }
        }
        if (!this.props.brands.response && nextProps.brands.response) {
            this.setState({ brands: nextProps.brands.response.MakeModels })
        }
    }
    onPressSend = () => {
        const error = validationSellFom(this.state, localStorage.getItem("lang"));
        this.setState({ error: error, disabled: true, showLoader: true })
        if (Object.keys(error).length === 0 && error.constructor === Object) {
            const sellData = stateFields(this.state);
            this.props.sellCarAction(sellData);
        } else {
            if (!this.state.brand && !this.state.modal && !this.state.mobile && !this.state.fullName) {
                this.setState({ responseError: true, responseSuccess: false, disabled: false, showLoader: false })
            } else {
                this.setState({ responseError: false, responseSuccess: false, disabled: false, showLoader: false })
            }
        }
    }
    onPressReSend = () => {
        this.setState({ responseSuccess: false, disabled: false, brand: "", modal: "", mobile: "", fullName: "", error: {} });
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sellCarAction: (data) => dispatch(sellCarAction(data)),
        getBrandAction: () => dispatch(getBrandAction())
    }
}
function mapStateToProps(state) {
    console.log(state);

    return { car: state.sellCar, brands: state.brands }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)