import React, { Component } from 'react'
import { LoaderStyle } from './loader.style'



export default class Loader extends Component {
   
    render() {
        return (
            <LoaderStyle >
                <div className="loader"></div>
            </LoaderStyle>

        )
    }
}
