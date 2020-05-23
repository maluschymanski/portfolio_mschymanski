import React from 'react'
import styled from 'styled-components';
import GitIcon from './assets/Octocat_blueBackground.png';

const Styles = styled.div`
    div{
       
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
            <h2>Hello There</h2>
            <p>
                Lorem Ipsum 
            </p>
                 
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="http://stadtrausch-dso.de/">Stadtrausch-DSO</a></li>
                <li class="list-group-item"><a href="https://happy-vision.xyz/">Happy Vision</a></li>
                <li class="list-group-item"><a href="https://2b-productions.now.sh/">2B-Productions</a></li>
                <li class="list-group-item"><a href="http://friederhaus.de/"> Friederhaus</a></li>
            </ul>
            <p>
                Ein paar meiner Projekte, so wie auch dieses hier können über meinen Github-Account geklont werden: <img id="gitIcon" src={GitIcon} alt="Git Icon" /> <a href="https://github.com/maluschymanski">github.com/maluschymanski</a>
            </p>
       </div>
    </Styles>
)