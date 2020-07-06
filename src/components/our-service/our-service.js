import React, { Component } from 'react'
import { OurServiceStyle } from './our-service.style'
import { Button, Grid } from '@material-ui/core'
import { CardStyle } from '../../styles/card.style'
import { strings } from '../../localization/localization'
import { fontForLang } from '../../helper/font-famliy'

export default class OurService extends Component {
    render() {
        return (
            <OurServiceStyle>
                <div className="header-service">
                    <h1 style={{fontFamily: fontForLang()}}>{strings.whyOurService}</h1>
                    <p style={{fontFamily: fontForLang()}}>{strings.weOperates24Hours} </p>
                </div>

                <Grid container className="container" >
                    <Grid
                        item xs={12} lg={4}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ padding: '20px' }}

                    >
                        <CardStyle>
                            <Grid container spacing={0} style={{ width: '100%' }}>
                                <Grid
                                    item xs={12} lg={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <img className="image-card" src={require('../../assets/images/6290918D-DB2D-469E-B550-27578DFBB2B9.svg')} />
                                </Grid>
                                <Grid
                                    item xs={12} lg={9}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <div style={{fontFamily: fontForLang()}} className="card-header">{strings.easyProcess}</div>
                                    <div style={{fontFamily: fontForLang()}} className="card-content">{strings.easyProcessContent}</div>

                                </Grid>
                            </Grid>
                        </CardStyle>

                    </Grid>

                    <Grid
                        item xs={12} lg={4}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ padding: '20px' }}
                    >
                        <CardStyle>
                            <Grid container spacing={0} style={{ width: '100%' }}>
                                <Grid
                                    item xs={12} lg={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <img className="image-card" src={require('../../assets/images/C2398076-9AAD-46D9-B070-3CF00B8BB99C.svg')} />


                                </Grid>
                                <Grid
                                    item xs={12} lg={9}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <div style={{fontFamily: fontForLang()}} className="card-header">{strings.getTheBest}</div>
                                    <div style={{fontFamily: fontForLang()}} className="card-content">{strings.getTheBestContent}</div>

                                </Grid>
                            </Grid>
                        </CardStyle>
                    </Grid>

                    <Grid
                        item xs={12} lg={4}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ padding: '20px' }}
                    >
                        <CardStyle>
                            <Grid container spacing={0} style={{ width: '100%' }}>
                                <Grid
                                    item xs={12} lg={3}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <img className="image-card" src={require('../../assets/images/4C79659C-D5EF-4342-8CB8-2829509942BD.svg')} />


                                </Grid>
                                <Grid
                                    item xs={12} lg={9}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <div style={{fontFamily: fontForLang()}} className="card-header">{strings.dedicatedTeam}</div>
                                    <div style={{fontFamily: fontForLang()}} className="card-content">{strings.dedicatedTeamContent}</div>
                                </Grid>
                            </Grid>
                        </CardStyle>
                    </Grid>
                </Grid>
            </OurServiceStyle>
        )
    }
}
