import React, { Component } from 'react'
import { FooterStyle } from "./footer.style";
import { Grid, Container } from '@material-ui/core';
import { strings } from '../../localization/localization';
export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className="docs">
                    <div className="header-docs">
                        <h1>{strings.requiredDoc}</h1>

                    </div>


                    <Container>
                        <Grid container spacing={0} style={{ width: '100%' }}>
                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p className="desc">{strings.emiratesId}</p>


                            </Grid>
                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p className="desc">{strings.possessionCertificate} </p>
                                    <p className="sub-desc">{strings.possessionCertificateSubHeader}</p>
                                </div>



                            </Grid>

                            <Grid
                                item xs={12} lg={4}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <p className="desc">{strings.bankDetails}</p>


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
                                    <img src={require('../../assets/images/E1E48E11-3B18-46C3-A7FF-254C0D7664D1.svg')} />

                                    <p className="desc-footer">{strings.buyNewAndUsed}</p>
                                </div>


                            </Grid>
                            <Grid
                                item xs={12} lg={6}
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div>
                                    <p className="p-follow">{strings.followTheFirstAndTheLargest}</p>
                                    <div className="icons">
                                        <span className="icon">  <i className="fab fa-facebook"></i></span>
                                        <span className="icon"> <i className="fab fa-twitter"></i></span>
                                        <span className="icon"><i className="fab fa-youtube"></i></span>
                                        <span className="icon"><i className="fab fa-instagram"></i></span>
                                       <span className="icon"> <i className="fab fa-google"></i></span>

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
