import React from 'react';
import styled from 'styled-components'

import { default as Dl, ProductDt as Dt, ProductDd as Dd } from './ProductDl';

const specOptions = {
  "spindleSpeed" : [ 6000, 10000, 12000, 15000 ],
  "numOfTools" : [ 40, 60, 80, 120, 180, 240 ],
  "structure" : [
    { id: 1, desc: "Moving Column on X-axis" },
    { id: 2, desc: "Moving Column on Z-axis" },
    { id: 3, desc: "Box-In-Box Column" }
  ],
  "workDimensions" : [
    { id: "400", worktableWidth: 400, worktableHeight: 400,
      workpieceDiameter: 550, workpieceHeight: 800 },
    { id: "500", worktableWidth: 500, worktableHeight: 500,
      workpieceDiameter: 570, workpieceHeight: 640 },
    { id: "500plus", worktableWidth: 500, worktableHeight: 500,
      workpieceDiameter: 780, workpieceHeight: 750 },
    { id: "630", worktableWidth: 630, worktableHeight: 630,
      workpieceDiameter: 900, workpieceHeight: 970 },
    { id: "630plus", worktableWidth: 630, worktableHeight: 630,
      workpieceDiameter: 1050, workpieceHeight: 1300 },
    { id: "800", worktableWidth: 800, worktableHeight: 800,
      workpieceDiameter: 1140, workpieceHeight: 970 }
  ]
}

const HorizontalsGrid = styled(Dl)`
  grid-template-areas:
    "horizontalOption1 horizontal horizontal horizontalOption2"
    "horizontalOption1 horizontal horizontal horizontalOption2"
    "horizontalOption3 horizontal horizontal horizontalOption4"
    "horizontalOption3 horizontal horizontal horizontalOption4";
`

const Options1 = ({children}) => { return(
  <>
    <label htmlFor=""> {children} </label>
    <select id="" name="">
      <option value=""></option>
      {specOptions.spindleSpeed.map( n => (
        <option key={n} value={n}>{n.toLocaleString()} rpm</option>))}
    </select>
  </>
)}

const Options2 = ({children}) => {
  return(<>
    <label htmlFor="horizontal-tool-magazine"> {children} </label>
    <select id="horizontal-tool-magazine" name="">
      <option value=""></option>
      {specOptions.numOfTools.map( n => (
        <option key={n} value={n}>{n}T</option>))}
    </select>
  </>
)}

const Options3 = ({children}) => { return(
  <>
    <label htmlFor="horizontal-structure"> {children} </label>
    <select id="horizontal-structure" name="">
      <option value=""></option>
      {specOptions.structure.map( n => (
        <option key={n.id} value={n.id}>{n.id}. {n.desc}</option>))}
    </select>
  </>
)}

const Options4 = ({children}) => { return(
  <>
    <label htmlFor="workDimensions"> {children} </label>
    <select id="workDimensions">
      <option value=""></option>
      {specOptions.workDimensions.map( n => (
        <option key={n.id} value="">{n.worktableWidth} x {n.worktableHeight} mm. with Ø{n.workpieceDiameter} x {n.workpieceHeight} mm.</option>))}
    </select>
  </>
)}

const horizontals = ({ ...props }) => (
  <HorizontalsGrid>
    <Dt gridArea="horizontal"> <div> Horizontals </div> </Dt>
    <Dd gridArea="horizontalOption1"> <Options1>
        Spindle, Spindle Speed: </Options1> </Dd>
    <Dd gridArea="horizontalOption2"> <Options2>
      Tool Magazine, Number of Tool Magazine: </Options2> </Dd>
    <Dd gridArea="horizontalOption3"> <Options3>
      Structure, Structure with bed casting: </Options3> </Dd>
    <Dd gridArea="horizontalOption4"> <Options4>
      Work Area, Table size, Max. Workpiece Dimensions, Working Table Size, With Max. Swing Diameter x Height ( D x H ) of Workpiece: </Options4> </Dd>
  </HorizontalsGrid>
)

export default horizontals;
