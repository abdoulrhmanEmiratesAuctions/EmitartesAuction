import React, { Component } from 'react'
import { FooterStyle } from "./footer.style";
import { Grid, Container } from '@material-ui/core';
import { strings } from '../../localization/localization';
import { fontForLang } from '../../helper/font-famliy';
export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className="docs">
                    <div className="header-docs">
                        <h1 style={{ fontFamily: fontForLang() }}>{strings.requiredDoc}</h1>

                    </div>


                    <Container>
                        <Grid container spacing={0} style={{ width: '100%' }}>
                            <Grid
                                item xs={4} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p style={{ fontFamily: fontForLang() }} className="desc">{strings.emiratesId}</p>


                            </Grid>
                            <Grid
                                item xs={4} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p style={{ fontFamily: fontForLang(), textAlign: 'center' }} className="desc">{strings.possessionCertificate} </p>
                                    <p style={{ fontFamily: fontForLang() }} className="sub-desc">{strings.possessionCertificateSubHeader}</p>
                                </div>



                            </Grid>

                            <Grid
                                item xs={4} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p style={{ fontFamily: fontForLang() }} className="desc">{strings.bankDetails}</p>


                            </Grid>


                        </Grid>
                    </Container>
                </div>
                <div className="footer">

                    <Container>
                        <Grid container spacing={0} style={{ width: '100%' }}>
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div className="logo">
                                    <img alt="image_1" src={require('../../assets/images/E1E48E11-3B18-46C3-A7FF-254C0D7664D1.svg')} />

                                    <p style={{ fontFamily: fontForLang() }} className="desc-footer">{strings.buyNewAndUsed}</p>
                                </div>


                            </Grid>
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p style={{ fontFamily: fontForLang() }} className="p-follow">{strings.followTheFirstAndTheLargest}</p>
                                    <div className="icons">
                                        <a href="https://www.facebook.com/emiratesauction" rel="noopener noreferrer" target="_blank" className="icon">
                                            <img alt="image_4" src={require('../../assets/images/4E2ECCEE-1753-4CEB-A6A6-C78A9172992E.svg')} />
                                        </a>

                                      
                                        <a href="https://twitter.com/emiratesauction" rel="noopener noreferrer" target="_blank" className="icon">
                                            <img alt="image_4" src={require('../../assets/images/A4C21B5A-D84D-4FAE-B688-9E02ED6CC143.svg')} />
                                        </a>
                                        <a href="https://www.youtube.com/user/emiratesauction" rel="noopener noreferrer" target="_blank" className="icon">
                                            <img alt="image_4" src={require('../../assets/images/EEE68104-DA94-44B9-9C68-CE3BBAAF2D33.svg')} />
                                        </a>

                                        <a href="https://www.instagram.com/emiratesauction/" rel="noopener noreferrer" target="_blank" className="icon">
                                            <img alt="image_4" src={require('../../assets/images/6CAE6CF1-1A1C-417A-BABF-D67829F0BD8E.svg')} />
                                        </a>

                                        <a href="https://plus.google.com/+EmiratesauctionUAE/" rel="noopener noreferrer" target="_blank" className="icon">
                                            <img alt="image_4" src={require('../../assets/images/290799E6-8B87-47C8-8014-9CF316A18DB5.svg')} />
                                        </a>
                                       

                                    </div>
                                </div>



                            </Grid>




                        </Grid>
                    </Container>

                </div>
            </FooterStyle>
        )
    }
}
