import styled, { css } from 'styled-components'

const ProductDl = styled.dl`
  display: grid;
  grid-auto-rows: minmax(4em, 1fr);
  grid-template-columns: repeat(4,1fr);
  background-color: hsla(5, 50%, 88%, 0.9);
  background: linear-gradient(
    to bottom right,
    hsla(5, 83%, 88%, 0.9),
    hsla(5, 17%, 88%, 0.9));
  border-radius: 1em 1em 0.5em 0.5em;
  margin-bottom: 3em;
  box-shadow: 0.4em 0.4em 0.4em hsla(0, 0%, 0%, 0.1);
  @media (min-width: 800px){
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`
export const ProductDt = styled.dt`
  font-weight: bold;
  font-size: 2em;
  background-color: hsla(60, 100%, 90%, 0.5);
  background: linear-gradient(
    to bottom right,
    hsla(60, 100%, 100%, 0.66),
    hsla(60, 100%, 80%, 0.33));
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.gridArea && css`grid-area: ${props.gridArea};`}
`
export const ProductDd = styled.dd`
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.gridArea && `grid-area: ${props.gridArea};`}
  > label {
    margin-bottom: 0.5em;
  }
`

export default ProductDl;
