import styled from "styled-components"
import sunceVeliko from '../img/sunce-veliko.png'

export default function Header(){
    return (
        <header>
            <nav>
                <Sunce src={sunceVeliko} alt="" />
                <h1>Latest weather on Mars</h1>
                <Desc>Find out the latest weather conditions on Mars! <br></br>The data lags behind a bit, but it is updated as soon as NASA releases it.</Desc>
            </nav>
        </header>
    )
}
const Desc = styled.p`
    margin: 0 auto;
    text-align: center;
    color: orange;
    font-weight: bold;
    margin-bottom: 50px;
    width: 40%;
    @media screen and (max-width: 600px){
            width: 90%;
            margin-bottom: 0;

    }
`
const Sunce = styled.img`
display: block;
    margin: 0 auto;
    padding: 30px 0;
    width: 10%;
    object-fit: contain;
    
`