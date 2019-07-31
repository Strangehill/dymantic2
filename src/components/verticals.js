import React from 'react';
import styled from 'styled-components'

import { default as Dl, ProductDt as Dt, ProductDd as Dd } from './ProductDl';

const specOptions = {
  "spindleSpeed" : [ 8000, 10000, 12000, 15000, 20000, 24000 ],
  "numOfTools" : [ 16, 24, 30, 32 ],
  "xAxisTravelingRange" : [ 700, 860, 1050, 1100, 1300, 1500 ],
  "workAreaModel" : [
    { id: "EV860", desc: "EV-860 860 x 600" },
    { id: "EV800APC", desc: "EV-800APC 860 x 500" },
    { id: "EV1050", desc: "EV-1050 1,050 x 600" },
    { id: "MV1100", desc: "MV-1100 1,100 x 650" },
    { id: "MV1300", desc: "MV-1300 1,300 x 680" },
    { id: "MV1600", desc: "MV-1600 1,750 x 700" },
    { id: "BMV1100", desc: "BMV-1100 1,100 x 650" },
    { id: "BMV1300", desc: "BMV-1300 1,300 x 680" },
    { id: "BMV1600", desc: "BMV-1600 1,900 x 850" }
  ]
}

const VerticalsGrid = styled(Dl)`
  grid-template-areas:
    "verticalOption1 verticalOption1 vertical vertical"
    "verticalOption2 verticalOption2 vertical vertical"
    "verticalOption3 verticalOption3 vertical vertical"
    "verticalOption4 verticalOption4 vertical vertical";
`

const Options1 = ({children}) => { return(
  <>
    <label htmlFor="vertical-spindle"> {children} </label>
    <select id="vertical-spindle">
      <option value=""></option>
      {specOptions.spindleSpeed.map( n => (
        <option key={n} value={n}>{n.toLocaleString()} rpm</option>))}
    </select>
  </>
)}

const Options2 = ({children}) => { return(
  <>
    <label htmlFor="vertical-tool-magazine"> {children} </label>
    <select id="vertical-tool-magazine" name="">
      <option value=""></option>
      {specOptions.numOfTools.map( n => (
      <option key={n} value={n}>{n}T</option>))}
    </select>
  </>
)}

const Options3 = ({children}) => { return(
  <>
    <label htmlFor="x-axis-traveling-range"> {children} </label>
    <select id="x-axis-traveling-range" name="">
      <option value=""></option>
      {specOptions.xAxisTravelingRange.map( n => (
        <option key={n} value={n}>{n.toLocaleString()} mm</option>))}
    </select>
  </>
)}

const Options4 = ({children}) => { return(
  <>
    <label htmlFor="vertical-work-area"> {children} </label>
    <select id="vertical-work-area">
      <option value=""></option>
      {specOptions.workAreaModel.map( (n, index, array) => {
      if ( index === 0 || n.id.substring(0,1) === array[index-1].id.substring(0,1))
      { return (
          <option key={n.id} value={n.id}>{n.desc}</option>);}
      else { return (
        <React.Fragment key={n.id}>
          <option value=""></option>
          <option value={n.id}>{n.desc}</option>
        </React.Fragment>
      );}})}
    </select>
  </>
)}

const verticals = ({ ...props }) => (
  <VerticalsGrid>
    <Dt gridArea="vertical"> <div> Verticals </div> </Dt>
    <Dd gridArea="verticalOption1"> <Options1>
      Spindle, Spindle Speed </Options1> </Dd>
    <Dd gridArea="verticalOption2"> <Options2>
      Tool Magazine, Number Of Tool Magazine </Options2> </Dd>
    <Dd gridArea="verticalOption3"> <Options3>
      Structure, X-axis Traveling Range </Options3> </Dd>
    <Dd gridArea="verticalOption4"> <Options4>
      Work Area, Model of Vertical Machining Center Working Area(mm) L x W </Options4> </Dd>
  </VerticalsGrid>
);

export default verticals;
