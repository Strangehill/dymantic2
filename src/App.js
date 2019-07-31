import React from 'react';
import styled from 'styled-components'

import logo from './logo.png';
import star from './ui/star.svg';

import './App.css';

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  /* padding: 1vmin 4vmin; */
  background: radial-gradient(
    hsl(37, 75%, 69%),
    hsl(37, 50%, 69%));
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: hsl(30, 50%, 20%);
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 6s linear;
  height: 9vmin;
  pointer-events: none;
`

const Dl = styled.dl`
  display: grid;
  grid-auto-rows: minmax(4em, 1fr);
  grid-template-columns: repeat(4,1fr);
  background: linear-gradient(
    to bottom right,
    hsl(0, 50%, 75%),
    hsl(0, 0%, 75%));
  border-radius: 1em 1em 0.5em 0.5em;
  margin-bottom: 3em;
  box-shadow: 0.4em 0.4em 0.4em hsla(0, 0%, 0%, 0.3);
  @media (min-width: 800px){
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`
const Dt = styled.dt`
  font-weight: bold;
  background-color: hsla(60, 100%, 80%, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Dd = styled.dd`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Lathes = styled(Dl)`
  background-color: hsl(0, 50%, 75%);
  grid-template-areas:
    "latheOption1 latheOption1 latheOption2 latheOption2"
    "lathe lathe lathe lathe"
    "lathe lathe lathe lathe"
    "latheOption3 latheOption3 latheOptin4 latheOption4" ;
  & > Dt { grid-area: lathe; }
  & > Dd:nth-of-type(1) { grid-area: latheOption1; }
  & > Dd:nth-of-type(2) { grid-area: latheOption2; }
  & > Dd:nth-of-type(3) { grid-area: latheOption3; }
  & > Dd:nth-of-type(4) { grid-area: latheOption4; }
`
const Verticals = styled(Dl)`
  background-color: hsl(15, 50%, 75%);
  grid-template-areas:
    "verticalOption1 verticalOption1 vertical vertical"
    "verticalOption2 verticalOption2 vertical vertical"
    "verticalOption3 verticalOption3 vertical vertical"
    "verticalOption4 verticalOption4 vertical vertical";
  & > Dt { grid-area: vertical; }
  & > Dd:nth-of-type(1) { grid-area: verticalOption1; }
  & > Dd:nth-of-type(2) { grid-area: verticalOption2; }
  & > Dd:nth-of-type(3) { grid-area: verticalOption3; }
  & > Dd:nth-of-type(4) { grid-area: verticalOption4; }
`
const Horizontals = styled(Dl)`
  background-color: hsl(30, 50%, 75%);
  grid-template-areas:
    "horizontalOption1 horizontal horizontal horizontalOption2"
    "horizontalOption1 horizontal horizontal horizontalOption2"
    "horizontalOption3 horizontal horizontal horizontalOption4"
    "horizontalOption3 horizontal horizontal horizontalOption4";
  & > Dt { grid-area: horizontal; }
  & > Dd:nth-of-type(1) { grid-area: horizontalOption1; }
  & > Dd:nth-of-type(2) { grid-area: horizontalOption2; }
  & > Dd:nth-of-type(3) { grid-area: horizontalOption3; }
  & > Dd:nth-of-type(4) { grid-area: horizontalOption4; }
`
const StyledStarLink = styled.h2`
  font-weight: normal;
`
const TwinklyStar = styled.img`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background: radial-gradient(
    hsla(42, 50%, 25%, 0.7),
    hsla(42, 0%, 100%, 0.3)
  );
`

const StarLink = ({ ...props }) => (
  <StyledStarLink>
    <TwinklyStar src={star} alt="star"  />
    <span> {props.children} </span>
  </StyledStarLink>
);

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <StarLink> => Links To A Reference </StarLink>
      </AppHeader>
      <main>
        <Lathes>
          <Dt> <div> Lathes </div> </Dt>
          <Dd>
            <label htmlFor="latheChuck"> Chuck Size and Nose Type </label>
            <select id="latheChuck">
              <option value=""></option>
              <option value="6">6” ( Nose A2-5 ) with Ø45mm</option>
              <option value="8">8” ( Nose A2-6 ) with Ø52mm ( OPT : Ø66mm )</option>
              <option value="10">10” ( Nose A2-8 ) with Ø75mm ( OPT : Ø78mm )</option>
              <option value="12">12” ( Nose A2-8 ) with Ø91mm</option>
              <option value="15">15” ( Nose A2-11 ) with Ø116mm</option>
              <option value="18">18” ( Nose A2-11 ) with Ø116mm</option>
              <option value="21">21” ( Nose A2-11 ) with Ø116mm</option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="lathe-turret"> Type of Turret </label>
            <select id="lathe-turret" name="">
              <option value=""></option>
              <option value=""> Hydraulic Turret </option>
              <option value=""> Servo Turret </option>
              <option value=""> Power Tooling Turret </option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor=""> Workpiece Dimensions,  Model of Lathe, Max. Machining Dia. x Length (mm) </label>
            <select id="">
              <option value=""></option>
              <option value="ML-430"> ML-430  430 x  240 </option>
              <option value="ML-560S"> ML-560S  320 x 320 </option>
              <option value="ML-560M"> ML-560M  320 x 570 </option>
              <option value="ML-360"> ML-360  360 x 470 </option>
              <option value="ML-360Y"> ML-360Y  130 x 470 </option>
              <option value="ML-600S"> ML-600S  420 x 540 </option>
              <option value="ML-600M"> ML-600M  420 x 780 </option>
              <option value="ML-600L"> ML-600L  420 x 1280 </option>
              <option value="ML-600Y"> ML-600Y  285 x 565 </option>
              <option value="ML-600MY"> ML-600MY  285 x 805 </option>
              <option value="ML-600LY"> ML-600LY  285 x 1305 </option>
              <option value="ML-600TY"> ML-600TY  285 x 495 </option>
              <option value="ML-600MTY"> ML-600MTY  285 x 735 </option>
              <option value="ML-600LTY"> ML-600LTY  285 x 1235 </option>
              <option value="ML-850"> ML-850  600 x 1270 </option>
              <option value="BML-500"> BML-500  360 x 300 </option>
              <option value="BML-560S"> BML-560S  320 x 320 </option>
              <option value="BML-560M"> BML-560M  320 x 570 </option>
              <option value="BML-600S"> BML-600S  420 x 540 </option>
              <option value="BML-600M"> BML-600M  420 x 780 </option>
              <option value="BML-600L"> BML-600L  420 x 1280 </option>
              <option value="BML-600Y"> BML-600Y  285 x 565 </option>
              <option value="BML-600MY"> BML-600MY  285 x 805 </option>
              <option value="BML-600LY"> BML-600LY  285 x 1305 </option>
              <option value="BML-600TY"> BML-600TY  285 x 495 </option>
              <option value="BML-600MTY"> BML-600MTY  285 x 735 </option>
              <option value="BML-600LTY"> BML-600LTY  285 x 1235 </option>
              <option value="BML-630"> BML-630  410 x 1526 </option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="tailstock"> Tailstock, Type of Live Center on Tailstock  </label>
            <select id="tailstock" name="">
              <option value=""></option>
              <option value="">MT #4 Quill</option>
              <option value="">MT #5 Quill</option>
            </select>
          </Dd>
        </Lathes>
        <Verticals>
          <Dt> <div> Verticals </div>
          </Dt>
          <Dd>
            <label htmlFor="vertical-spindle"> Spindle, Spindle Speed </label>
            <select id="vertical-spindle">
              <option value=""></option>
              <option value="8,000">8,000rpm</option>
              <option value="10,000">10,000rpm</option>
              <option value="12,000">12,000rpm</option>
              <option value="15,000">15,000rpm</option>
              <option value="20,000">20,000rpm</option>
              <option value="24,000">24,000rpm</option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="vertical-tool-magazine"> Tool Magazine, Number Of Tool Magazine </label>
            <select id="vertical-tool-magazine" name="">
              <option value=""></option>
              <option value="16">16T</option>
              <option value="">24T</option>
              <option value="">30T</option>
              <option value="">32T</option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="vertical-traveling-range"> Structure, X-axis Traveling Range </label>
            <select id="vertical-traveling-range" name="">
              <option value=""></option>
              <option value="700">700mm</option>
              <option value="860">860mm</option>
              <option value="1,050">1,050mm</option>
              <option value="1,100">1,100mm</option>
              <option value="1,300">1,300mm</option>
              <option value="1,500">1,500mm</option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="vertical-work-area"> Work Area, Model of Vertical Machining Center Working Area(mm) L x W </label>
            <select id="vertical-work-area">
              <option value=""></option>
              <option value="">EV-860 860 x  600</option>
              <option value="">EV-800APC 860 x 500</option>
              <option value="">EV-1050 1,050 x 600</option>
              <option value=""></option>
              <option value="">MV-1100 1,100 x 650</option>
              <option value="">MV-1300 1,300 x 680</option>
              <option value="">MV-1600 1,750 x 700</option>
              <option value=""></option>
              <option value="">BMV-1100 1,100 x 650</option>
              <option value="">BMV-1300 1,300 x 680</option>
              <option value="">BMV-1600 1,900 x 850</option>
            </select>
          </Dd>
        </Verticals>
        <Horizontals>
          <Dt> <div> Horizontals </div> </Dt>
          <Dd>
            <label htmlFor=""> Spindle, Spindle Speed: </label>
            <select id="" name="">
              <option value=""></option>
              <option value=""> 6,000rpm </option>
              <option value=""> 10,000rpm </option>
              <option value=""> 12,000rpm </option>
              <option value=""> 15,000rpm </option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="horizontal-tool-magazine"> Tool Magazine, Number of Tool Magazine: </label>
            <select id="horizontal-tool-magazine" name="">
              <option value=""></option>
              <option value=""> 40T </option>
              <option value=""> 60T </option>
              <option value=""> 80T </option>
              <option value=""> 120T </option>
              <option value=""> 180T </option>
              <option value=""> 240T </option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor="horizontal-structure"> Structure, Structure with bed casting: </label>
            <select id="horizontal-structure" name="">
              <option value=""></option>
              <option value="1"> 1.Moving Column on X-axis </option>
              <option value="2"> 2.Moving Column on Z-axis </option>
              <option value="3"> 3.Box-In-Box Column </option>
            </select>
          </Dd>
          <Dd>
            <label htmlFor=""> Work Area, Table size, Max. Workpiece Dimensions, Working Table Size, With Max. Swing Diameter x Height ( D x H ) of Workpiece: </label>
            <select id="">
              <option value=""></option>
              <option value=""> 400 x 400mm with Ø550 x 800mm </option>
              <option value=""> 500 x 500mm with Ø570 x 640mm </option>
              <option value=""> 500 x 500mm with Ø780 x 750mm </option>
              <option value=""> 630 x 630mm with Ø900 x 970mm </option>
              <option value=""> 630 x 630mm with Ø1,050 x 1,300mm </option>
              <option value=""> 800 x 800mm with Ø1,140 x 970mm </option>
            </select>
          </Dd>
        </Horizontals>
      </main>
    </AppWrapper>
  );
}

export default App
