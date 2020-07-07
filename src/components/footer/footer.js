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
                        <h1 style={{fontFamily: fontForLang()}}>{strings.requiredDoc}</h1>

                    </div>


                    <Container>
                        <Grid container spacing={0} style={{ width: '100%' }}>
                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p style={{fontFamily: fontForLang()}} className="desc">{strings.emiratesId}</p>


                            </Grid>
                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p style={{fontFamily: fontForLang() , textAlign:'center'}} className="desc">{strings.possessionCertificate} </p>
                                    <p style={{fontFamily: fontForLang()}} className="sub-desc">{strings.possessionCertificateSubHeader}</p>
                                </div>



                            </Grid>

                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p style={{fontFamily: fontForLang()}} className="desc">{strings.bankDetails}</p>


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

                                    <p style={{fontFamily: fontForLang()}} className="desc-footer">{strings.buyNewAndUsed}</p>
                                </div>


                            </Grid>
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p style={{fontFamily: fontForLang()}} className="p-follow">{strings.followTheFirstAndTheLargest}</p>
                                    <div className="icons">
                                        <a href="https://www.facebook.com/emiratesauction"  rel="noopener noreferrer"   target="_blank" className="icon">  <i className="fab fa-facebook"></i></a>
                                        <a href="https://twitter.com/emiratesauction"  rel="noopener noreferrer"   target="_blank" className="icon"> <i className="fab fa-twitter"></i></a>
                                        <a href="https://www.youtube.com/user/emiratesauction"  rel="noopener noreferrer"   target="_blank" className="icon"><i className="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/emiratesauction/"  rel="noopener noreferrer"   target="_blank" className="icon"><i className="fab fa-instagram"></i></a>
                                       <a href="https://plus.google.com/+EmiratesauctionUAE"  rel="noopener noreferrer"   target="_blank" className="icon"> <i className="fab fa-google"></i></a>

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
