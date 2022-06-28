import styled from "styled-components"
export default function Sol(props){
    const {sol, atmo_opacity, max_temp, min_temp, pressure, sunrise, sunset, local_uv_irradiance_index} = props.sol

    function formatDate (input) {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1], day = datePart[2];
      
        return day+'.'+month+'.'+year+'.';
      }
      
    const datum = formatDate(props.sol.terrestrial_date)
    return (
        <article className="sol">
            <EarthDay>{datum}</EarthDay>
            <MarsDay>Mars day: <span className="whiteText">{sol} </span></MarsDay>
            <div className="infoWrapper">
                
            <p className="generalWeather">{atmo_opacity}</p>
            <p className="weatherInfo"><span>Max:</span> <span>{max_temp}°C</span></p>
            <p className="weatherInfo"><span>Min:</span> <span> {min_temp}°C</span></p>
            <p className="weatherInfo"><span>Sunrise:</span> <span> {sunrise}</span></p>
            <p className="weatherInfo"><span>Sunset:</span> <span> {sunset}</span></p>
            </div>
        </article>
    )
}
const EarthDay = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
    padding: 0px 0;
    letter-spacing: 2px;
`
const MarsDay = styled.h1`
    color: orange;
    font-size: 3rem;
    margin: -40px 0 0 0;
    padding-top: 10px;

`
