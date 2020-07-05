import React, { Component } from 'react'
import Header from '../../components/header/header'
import { ContainerStyle } from '../../styles/container.style'
import Instructions from '../../components/instruction/instructions'
import Form from '../../components/form/form'
import OurService from '../../components/our-service/our-service'
import OurCall from '../../components/our-call/our-call'
import Footer from '../../components/footer/footer'
import { observableLang } from '../../services/lang'

export default class Home extends Component {
    componentDidMount() {
        observableLang.subscribe((Res) => this.setState({}));
    }
    render() {
        return (
            <div>
                <ContainerStyle>
                    <Header></Header>
                </ContainerStyle>
                <Instructions></Instructions>
                <Form></Form>
                <OurService></OurService>
                <OurCall></OurCall>
                <Footer></Footer>
            </div>
        )
    }
}
