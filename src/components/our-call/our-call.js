import React, { Component } from 'react'
import { OurCallStyle } from './our-call.style'
import { Grid } from '@material-ui/core'
import { strings } from '../../localization/localization'
import { fontForLang } from '../../helper/font-famliy'

export default class OurCall extends Component {
 
    render() {
        return (
            <OurCallStyle>
                <div className="header-call">
                    <h1 style={{fontFamily: fontForLang()}}>{strings.getPreparedBeforeCall}</h1>
                    <p style={{fontFamily: fontForLang()}}>{strings.requiredDocs} </p>
                </div>
                <Grid container spacing={0} className="container" >
                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        className="list-box"
                        >
                      

                        <ul style={{fontFamily: fontForLang()}} className="list">
                            <li>{strings.doc1}</li>
                            <li>{strings.doc2}</li>
                            <li>{strings.doc4}</li>
                        </ul>
                     

                    </Grid>

                    <Grid
                        item xs={12} lg={6}
                        container
                        direction="row"
                        className="list-box"
                        >
                        
                        <ul style={{fontFamily: fontForLang()}} className="list">
                           
                            <li>{strings.doc6}</li>
                            <li>{strings.doc7}</li>
                            <li>{strings.doc8}</li>
                        </ul>
                    </Grid>
                </Grid>
            </OurCallStyle>
        )
    }
}
