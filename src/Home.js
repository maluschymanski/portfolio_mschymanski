import React from 'react'
import styled from 'styled-components';
import GitIcon from './assets/Octocat_blueBackground.png';

const Styles = styled.div`
    h2, p, .list-group,.list-group-item{
        text-align: center; 
    }

    .list-group-item{
        background-color: #1c1c1c; 
        color: white;

    }

    #gitIcon{
       max-height: 3em;
    }
`;



export const Home = () => (

    <Styles>
        <div>
           Blub
       </div>
    </Styles>
)