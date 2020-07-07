import React, { Component } from 'react'
import { FormStyle } from './form.style'
import { Grid, Button } from '@material-ui/core'
import { strings } from '../../localization/localization'
import { validationSellFom, stateFields } from '../../validations/sell-form';
import { sellCarAction } from '../../redux/actions/sell.action';
import { connect } from 'react-redux';
import { observableLang } from '../../services/lang';
import { fontForLang } from '../../helper/font-famliy';
import { iconHandler } from '../../helper/angle-icon-handler';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {
                brand: "",
                modal: "",
                fullName: "",
                mobile: ""
            },
            responseError: false,
            responseSuccess: false,
            disabled: false,
            brand: "",
            modal: "",
            fullName: "",
            mobile: ""
        }
    }
    componentDidMount() {
        observableLang.subscribe((Res) => {
            this.setState({responseError: false , error: { brand: "", modal: "", fullName: "", mobile: ""}, });
        });

    }
    onChangeValueInput = (value, state, placeholder, lang) => {
        if (value && value !== 'Brand' ) {
            this.setState({ [state]: value, error: { ...this.state.error, [state]: "" } });
        } else {
            this.setState({ [state]: value, error: { ...this.state.error, [state]: lang === 'ar' ?  `برجاء ادخال ${placeholder}` : `Please Type ${placeholder}` } })
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
                    className={`input ${state == 'fullName' ? 'foucs': ''}`} placeholder={state == 'modal' ? 'YYYY' : placeholder} />
                {
                    this.state.error[state] ? <div className="error-validation" style={{fontFamily: fontForLang()}} > {this.state.error[state]}</div> : ""
                }
            </div>
        )
    }
    renderSelect = (state) => {
        return (
            <div className="form-group">
                <div className="label"><label className="" style={{ fontFamily: fontForLang() }}>{'Brand'}</label></div>
                <select className="input" placeholder={'Brand'} 
                  onChange={(e) => this.onChangeValueInput(e.target.value, state, 'Brand', localStorage.getItem("lang"))}
                  onBlur={(e) => this.onChangeValueInput(e.target.value, state, 'Brand', localStorage.getItem("lang"))}
                  style={{
                    fontFamily: fontForLang(),
                    borderColor: this.state.error[state] ? '#ec1c24' : '',
                    backgroundColor: this.state.error[state] ? 'rgba(236, 28, 36, 0.04)' : '',
                    borderRadius: this.state.error[state] ? '5px 5px 0px 0px' : '',
                    width: '87.7%'

                }}>
                    <option selected hidden disabled>Brand</option>
                    <option>Test Option</option>
                </select>
                {
                    this.state.error[state] ? <div className="error-validation" style={{fontFamily: fontForLang()}} > {this.state.error[state]}</div> : ""
                }
            </div>
        )
    }
    render() {
        return (
            <FormStyle id="form">
                <div className="header">
                    <h2 style={{ fontFamily: fontForLang() }}>{strings.startToday}</h2>
                    <p style={{ fontFamily: fontForLang() }}>{strings.youAreJustOneClick}</p>
                </div>
                <Grid container spacing={0} className="container" >
                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        style={{ padding: '0px 20px' }}
                    >
                        <div className="image-video">
                            <div className="Bg-Circle">
                                <img alt="image_2" className="icon-play" src={require('../../assets/images/18225C47-54D9-4099-94F6-94E2EC837565.svg')} />
                            </div>
                        </div>
                        <div className="video-desc">
                            <h1 style={{ fontFamily: fontForLang() }}>{strings.whyYouShouldSellYourCar}</h1>
                            <h6 style={{ fontFamily: fontForLang() }}>{strings.weSupportYouFromStartToFinish} </h6>
                            <h5 style={{ fontFamily: fontForLang() }}>{strings.weHaveStreamlind}</h5>
                            <p style={{ fontFamily: fontForLang() }}>{strings.readyToSell}</p>
                        </div>
                    </Grid>

                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        
                        style={{ padding: '0px 20px' }}
                    >
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
                                            <Button style={{ fontFamily: fontForLang() }} className="btn-send" variant="contained" onClick={() => this.onPressReSend()}>{strings.sendYourInquiry}
                                                <i className={iconHandler()}></i>
                                            </Button>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        {/* {this.state.responseError ? <div style={{ fontFamily: fontForLang() }} className="error-toast">{strings.errorMsgResponse}</div> : ""} */}
                                        <div style={{ fontFamily: fontForLang() }} className="header-input">  {strings.enterCarDetail}</div>
                                        {this.renderSelect("brand")}
                                        {this.renderInputs("number", "modal", strings.carModel)}
                                        <div className="label"></div>
                                        <div className="header-input" style={{ fontFamily: fontForLang() }} >  {strings.enterYourContactInfo}</div>
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
                    </Grid>

                </Grid>
            </FormStyle>
        )
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.car.response && nextProps.car.response) {
            if (nextProps.car.response.message === "Network Error") {
                this.setState({ responseError: true, disabled: false, });
            } else {
                this.setState({ responseSuccess: true, disabled: false, responseError: false });
            }
        }
    }
    onPressSend = () => {
        const error = validationSellFom(this.state, localStorage.getItem("lang"));
        this.setState({ error: error, disabled: true })
        if (Object.keys(error).length === 0 && error.constructor === Object) {
            const sellData = stateFields(this.state);
            this.props.sellCarAction(sellData);
        } else {
            this.setState({ responseError: true, responseSuccess: false, disabled: false })
        }
    }
    onPressReSend = () => {
        this.setState({ responseSuccess: false, disabled: false, brand: "", modal: "", mobile: "", fullName: "", error: {} });
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sellCarAction: (data) => dispatch(sellCarAction(data)),
    }
}
function mapStateToProps(state) {
    console.log(state);

    return { car: state.sellCar }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)