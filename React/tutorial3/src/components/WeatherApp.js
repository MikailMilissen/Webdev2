import React, { Component } from 'react'
import { Container } from 'reactstrap'
import fetch from 'node-fetch'

// Wheater App API key: e870db2398e5c18b06ed7b5c0729d702

export class WeatherApp extends Component {

    render() {
        return (
            <div>
                <Container>
                <h1>Weather Api Application</h1>
                </Container>
            </div>
        )
    }
}

export default WeatherApp
