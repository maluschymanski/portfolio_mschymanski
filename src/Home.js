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
            <h2>Hi Team,</h2>
            <p>
                hier kommt meine etwas andere Bewerbung. 
            </p>
            <p>
                Über das Meetup ReactJS bin ich zum ersten Mal auf euch aufmerksam geworden.
                Außerdem habe ich über Anne Behrend bereits des Öfteren auf Veranstaltungen in euren Räumlichkeiten ausgeholfen. 
                In eurem Team habe ich mich stets Willkommen gefühlt und würde nun gerne Teil des Teams werden. 
            </p>
            <p>
                Zurzeit studiere ich im letzten Semester Medieninformatik im Bachelor. 
                Neben meinem Studium arbeite ich seit über drei Jahren als studentische Hilfskraft bei Humanizing Technologies und programmiere hauptsächlich Spiele für den humanoiden Roboter Pepper.  
            </p>
            <p>
                Durch einen Jobwechsel erhoffe ich mir Arbeitserfahrungen in einem anderen Bereich und auch Erfahrungen in einer weiteren Programmiersprache zu bekommen.  
            </p>
            <p>
                Als Freelancer habe ich an einer Recruiting Applikation mit dem Web Framework vue.js mitgearbeitet und verschiedene statische Webseiten mit dem Frontend-CSS-Framework Bootstrap programmiert: 
            </p>        
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="http://stadtrausch-dso.de/">Stadtrausch-DSO</a></li>
                <li class="list-group-item"><a href="https://happy-vision.xyz/">Happy Vision</a></li>
                <li class="list-group-item"><a href="https://2b-productions.now.sh/">2B-Productions</a></li>
                <li class="list-group-item"><a href="http://friederhaus.de/"> Friederhaus</a></li>
            </ul>
            <p>
                Ein paar meiner Projekte, so wie auch meine Bewerbung können über meinen Github-Account geklont werden: <img id="gitIcon" src={GitIcon} alt="Git Icon" /> <a href="https://github.com/maluschymanski">github.com/maluschymanski</a>
            </p>
       </div>
    </Styles>
)