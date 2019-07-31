import React from 'react';
import styled from 'styled-components'

import { default as Dl, ProductDt as Dt, ProductDd as Dd } from './ProductDl';

const specOptions = {
  "chuck" : [
    { id: 6, desc: "6” ( Nose A2-5 ) with Ø45mm" },
    { id: 8, desc: "8” ( Nose A2-6 ) with Ø52mm ( OPT : Ø66mm )" },
    { id: 10, desc: "10” ( Nose A2-8 ) with Ø75mm ( OPT : Ø78mm )" },
    { id: 12, desc: "12” ( Nose A2-8 ) with Ø91mm" },
    { id: 15, desc: "15” ( Nose A2-11 ) with Ø116mm" },
    { id: 18, desc: "18” ( Nose A2-11 ) with Ø116mm" },
    { id: 21, desc: "21” ( Nose A2-11 ) with Ø116mm" }
  ],
  "turretType" : [
    { id: "hydraulic", desc: "Hydraulic Turret" },
    { id: "servo", desc: "Servo Turret" },
    { id: "powerTooling", desc: "Power Tooling Turret" }
  ],
  "workpieceDimensions" : [
    { id: "ML430", desc: "ML-430  430 x  240 "},
    { id: "ML560S", desc: "ML-560S  320 x 320 "},
    { id: "ML560M", desc: "ML-560M  320 x 570 "},
    { id: "ML360", desc: "ML-360  360 x 470 "},
    { id: "ML360Y", desc: "ML-360Y  130 x 470 "},
    { id: "ML600S", desc: "ML-600S  420 x 540 "},
    { id: "ML600M", desc: "ML-600M  420 x 780 "},
    { id: "ML600L", desc: "ML-600L  420 x 1280 "},
    { id: "ML600Y", desc: "ML-600Y  285 x 565 "},
    { id: "ML600MY", desc: "ML-600MY  285 x 805 "},
    { id: "ML600LY", desc: "ML-600LY  285 x 1305 "},
    { id: "ML600TY", desc: "ML-600TY  285 x 495 "},
    { id: "ML600MTY", desc: "ML-600MTY  285 x 735 "},
    { id: "ML600LTY", desc: "ML-600LTY  285 x 1235 "},
    { id: "ML850", desc: "ML-850  600 x 1270 "},
    { id: "BML500", desc: "BML-500  360 x 300 "},
    { id: "BML560S", desc: "BML-560S  320 x 320 "},
    { id: "BML560M", desc: "BML-560M  320 x 570 "},
    { id: "BML600S", desc: "BML-600S  420 x 540 "},
    { id: "BML600M", desc: "BML-600M  420 x 780 "},
    { id: "BML600L", desc: "BML-600L  420 x 1280 "},
    { id: "BML600Y", desc: "BML-600Y  285 x 565 "},
    { id: "BML600MY", desc: "BML-600MY  285 x 805 "},
    { id: "BML600LY", desc: "BML-600LY  285 x 1305 "},
    { id: "BML600TY", desc: "BML-600TY  285 x 495 "},
    { id: "BML600MTY", desc: "BML-600MTY  285 x 735 "},
    { id: "BML600LTY", desc: "BML-600LTY  285 x 1235 "},
    { id: "BML630", desc: "BML-630  410 x 1526 "}
  ],
  "tailstock" : [
    { id: "4", desc: "MT #4 Quill"},
    { id: "5", desc: "MT #5 Quill"}
  ]
}

const LathesGrid = styled(Dl)`
  grid-template-areas:
    "latheOption1 latheOption1 latheOption2 latheOption2"
    "lathe lathe lathe lathe"
    "lathe lathe lathe lathe"
    "latheOption3 latheOption3 latheOption4 latheOption4" ;
`

const Options1 = ({children}) => { return(
  <>
    <label htmlFor="latheChuck"> {children} </label>
    <select id="latheChuck">
      <option value=""></option>
      {specOptions.chuck.map( n => (
        <option key={n.id} value={n.id}> {n.desc}</option>
      ))}
    </select>
  </>
)}

const Options2 = ({children}) => { return(
  <>
    <label htmlFor="lathe-turret"> {children} </label>
    <select id="lathe-turret" name="">
      <option value=""></option>
      {specOptions.turretType.map( n => (
        <option key={n.id} value={n.id}> {n.desc} </option>
      ))}
    </select>
  </>
)}

const Options3 = ({children}) => { return(
  <>
    <label htmlFor=""> {children} </label>
    <select id="">
      <option value=""></option>
      {specOptions.workpieceDimensions.map( (n, index, array) => {
      if ( index === 0 || n.id.substring(0,1) === array[index-1].id.substring(0,1))
      { return (
        <option key={n.id} value={n.id}> {n.desc} </option>);}
        else { return (
          <React.Fragment key={n.id}>
            <option value=""></option>
            <option key={n.id} value={n.id}> {n.desc} </option>
          </React.Fragment>
        );}})}
    </select>
  </>
)}

const Options4 = ({children}) => { return(
  <>
    <label htmlFor="tailstock"> {children} </label>
    <select id="tailstock" name="">
      <option value=""></option>
      {specOptions.tailstock.map( n => (
        <option key={n.id} value={n.id}> {n.desc} </option>
      ))}
    </select>
  </>
)}

const lathes = ({ ...props }) => (
  <LathesGrid>
    <Dt gridArea="lathe"> <div> Lathes </div> </Dt>
    <Dd gridArea="latheOption1"> <Options1>
      Chuck Size and Nose Type </Options1> </Dd>
   <Dd gridArea="latheOption2"> <Options2>
      Type of Turret </Options2> </Dd>
    <Dd gridArea="latheOption3"> <Options3>
      Workpiece Dimensions,  Model of Lathe, Max. Machining Dia. x Length (mm) </Options3> </Dd>
    <Dd gridArea="latheOption4"> <Options4>
      Tailstock, Type of Live Center on Tailstock  </Options4> </Dd>
  </LathesGrid>
);

export default lathes;
