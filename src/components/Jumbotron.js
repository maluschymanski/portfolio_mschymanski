import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import PepperImage from '../assets/jumbotron.png';

const Styles = styled.div`
    .jumbo {
        background: url(${PepperImage}) no-repeat fixed bottom;  
        background-size: cover; 
        color: #FFFFFF;
        height: 450px;
        position: relative; 
        z-index: -2;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }


      h1{    
        margin-top: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center
      }

      p{
        display: flex;
        align-items: center;
        justify-content: center;
      }

`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
                <Container>
                    <h1>
                    EVERY CHILD IS AN ARTIST. THE PROBLEM IS HOW TO REMAIN AN ARTIST ONCE WE GROW UP. 
                </h1>
                     <p>PABLO PICASSO</p>
                </Container>
        </Jumbo>
    </Styles>
)