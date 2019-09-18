import React, { useState } from 'react';
import styled from 'styled-components'

import { default as Dl, ProductDt as Dt, ProductDd as Dd } from './ProductDl';

import Lathes_icon from '../ui/Lathes.svg';
import Lathes_Chuck_icon from '../ui/Lathes_Chuck.svg';
import Lathes_Max_Machine_Dimension_icon from '../ui/Lathes_Max_Machine_Dimension.svg';
import Lathes_Tailstock_icon from '../ui/Lathes_Tailstock.svg';
import Lathes_Turret_icon from '../ui/Lathes_Turret.svg';
import latheChuckIcon1 from '../images/lathe-chuck-icon1.svg';

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
    { maxDia: "285", models: [
      { id: "ML360Y", desc: "ML-360Y  130 x 470 "},
      { id: "ML600Y", desc: "ML-600Y  285 x 565 "},
      { id: "ML600MY", desc: "ML-600MY  285 x 805 "},
      { id: "ML600LY", desc: "ML-600LY  285 x 1305 "},
      { id: "ML600TY", desc: "ML-600TY  285 x 495 "},
      { id: "ML600MTY", desc: "ML-600MTY  285 x 735 "},
      { id: "ML600LTY", desc: "ML-600LTY  285 x 1235 "},
      { id: "BML600Y", desc: "BML-600Y  285 x 565 "},
      { id: "BML600MY", desc: "BML-600MY  285 x 805 "},
      { id: "BML600LY", desc: "BML-600LY  285 x 1305 "},
      { id: "BML600TY", desc: "BML-600TY  285 x 495 "},
      { id: "BML600MTY", desc: "BML-600MTY  285 x 735 "},
      { id: "BML600LTY", desc: "BML-600LTY  285 x 1235 "}
    ]},
    { maxDia: "360", models: [
      { id: "ML560S", desc: "ML-560S  320 x 320 "},
      { id: "ML560M", desc: "ML-560M  320 x 570 "},
      { id: "ML360", desc: "ML-360  360 x 470 "},
      { id: "BML500", desc: "BML-500  360 x 300 "},
      { id: "BML560S", desc: "BML-560S  320 x 320 "},
      { id: "BML560M", desc: "BML-560M  320 x 570 "}
    ]},
    { maxDia: "430", models: [
      { id: "ML430", desc: "ML-430  430 x  240 "},
      { id: "ML600S", desc: "ML-600S  420 x 540 "},
      { id: "ML600M", desc: "ML-600M  420 x 780 "},
      { id: "ML600L", desc: "ML-600L  420 x 1280 "},
      { id: "BML600S", desc: "BML-600S  420 x 540 "},
      { id: "BML600M", desc: "BML-600M  420 x 780 "},
      { id: "BML600L", desc: "BML-600L  420 x 1280 "},
      { id: "BML630", desc: "BML-630  410 x 1526 "}
    ]},
    { maxDia: "720", models: [
      { id: "ML850", desc: "ML-850  600 x 1270 "}
    ]}
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
    <img src={latheChuckIcon1} alt="" />
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

const Options3 = ({children}) => {
  const [cat, setCat] = useState('none')

  function handleCatChange(e) {
    setCat(e.target.value);
  }

  // let allModels = specOptions.workpieceDimensions.map( n => n.maxDia )
  // console.log(specOptions.workpieceDimensions.forEach( n => n.maxDia ))

  return(
  <>
    <label htmlFor=""> {children} </label>
    <div>
      <select
        id=""
        name=""
        value={cat}
        onChange={handleCatChange}>
        <option value="">Max. Diameter</option>
        { specOptions.workpieceDimensions.map( n => {
          return (
            <option key={n.maxDia} value={n.maxDia}>{n.maxDia} mm</option>
          )
        })}
      </select>

      { specOptions.workpieceDimensions.map( n => {
        return (
          <select
            key={n.maxDia}
            id={"maxDia" + n.maxDia}
            name=""
            style={{ display: cat===n.maxDia ? '' : 'none' }}>
            <option value=""></option>
            { n.models.map( n => {
              return (
                <option key={n.id} value={n.id}>{n.id}</option>
              )
        })}
          </select>
        )
      })}
    </div>

    {/* chop this up into four categories */}
    {/* choose first one of four max. diameters, and then reveal the next list options, repeat for vertical work area */}
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
    <Dt gridArea="lathe">
      <span> <img width="96px" height="96px" src={Lathes_icon}/> </span>
      <span> Lathes </span>
    </Dt>
    <Dd gridArea="latheOption1">
      <span> <img width="64px" height="64px" src={Lathes_Chuck_icon}/> </span>
      <span> <Options1> Chuck Size and Nose Type </Options1> </span>
    </Dd>
    <Dd gridArea="latheOption2">
      <span> <img width="64px" height="64px" src={Lathes_Turret_icon}/> </span>
      <span> <Options2> Type of Turret </Options2> </span>
    </Dd>
    <Dd gridArea="latheOption3">
      <span> <img width="64px" height="64px" src={Lathes_Max_Machine_Dimension_icon}/> </span>
      <span> <Options3> Max. Diameter: then Workpiece Dimensions,  Model of Lathe, Max. Machining Dia. x Length (mm) </Options3> </span>
    </Dd>
    <Dd gridArea="latheOption4">
      <span> <img width="64px" height="64px" src={Lathes_Tailstock_icon}/> </span>
      <span> <Options4> Tailstock, Type of Live Center on Tailstock  </Options4> </span>
    </Dd>
  </LathesGrid>
);

export default lathes;
