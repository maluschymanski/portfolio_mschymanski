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
            <h2>Hello There,</h2>
            <p>
                my Name is Lu and I am a student, software developer and explorer from Düsseldorf.                 
            </p>
            <p>
                I love exploring the world of technology and learning new things.
            </p>
            <p>
                In addition to technology, I am very interested in politics this is why I joined Die Grünen at the beginning of the year. 
                I also opted for a vegan, healthy, frugalist and minimalist life.
            </p>
            <p>
                In my free time I like to write static websites for friends and family. If you are curious please do not hesitate to have a look: 
            </p>
                 
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="http://stadtrausch-dso.de/">Stadtrausch-DSO</a></li>
                <li class="list-group-item"><a href="https://happy-vision.xyz/">Happy Vision</a></li>
                <li class="list-group-item"><a href="https://2b-productions.now.sh/">2B-Productions</a></li>
                <li class="list-group-item"><a href="http://friederhaus.de/"> Friederhaus</a></li>
            </ul>
            <p>
                A few projects - like this one - can be cloned from my Github profile:  <img id="gitIcon" src={GitIcon} alt="Git Icon" /> <a href="https://github.com/maluschymanski">github.com/maluschymanski</a>
            </p>
            <p>
              When I'm not in front of a computer I like to go for a run, do yoga, develop healthy and vegan cakes, pancakes or cookies or spend time with family and friends.   
            </p>
       </div>
    </Styles>
)