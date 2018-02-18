import styled, { css } from 'styled-components';
import {
  rem,
  padding
} from 'polished';
import {
  media
} from 'dapper-ui-tools';

export const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${p => p.fluid && css`
    ${padding(
      0,
      rem(`${p.theme.grid.outerMargin}px`),
      0,
      rem(`${p.theme.grid.outerMargin}px`)
    )}
  `}
  ${p => !p.fluid && css`
    ${Object.keys(p.theme.grid.breakpoints).map(bp => css`
      ${media(p.theme.grid.breakpoints[bp])`
        width: ${rem(`${p.theme.grid.container[bp]}px`)};
      `}
    `)}
  `}
`;

export const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${p => padding(
    0,
    rem(`${p.theme.grid.gutter}px`),
    0,
    rem(`${p.theme.grid.gutter}px`)
  )}
  ${p => Object.keys(p.theme.grid.breakpoints).map(bp => {
    if(p[bp]) {
      return css`
        ${media(p.theme.grid.breakpoints[bp])`
          flex-basis: ${100 / p.theme.grid.totalCols * p[bp]}%;
          max-width: ${100 / p.theme.grid.totalCols * p[bp]}%;
          display: block;
        `}
      `
    } else if(p[bp] === false) {
      return css`
        display: none;
      `
    }
  })}
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  ${p => Object.keys(p.theme.grid.breakpoints).reduce((memo,bp) => {
    if(p[bp]) {
      return css`
        ${memo}
        ${media(p.theme.grid.breakpoints[bp])`
          ${p => {
            switch(true) {
              case p[bp].justifySpaceBetween:
                return `justify-content: space-between;`;
              case p[bp].justifySpaceAround:
                return `justify-content: space-around;`;
              case p[bp].justifyFlexStart:
                  return `justify-content: flex-start;`;
              case p[bp].justifyFlexEnd:
                  return `justify-content: flex-end;`;
              case p[bp].justifyEnd:
                  return `justify-content: flex-end;`;
              case p[bp].justifyStart:
                  return `justify-content: flex-start;`;
              case p[bp].justifyLeft:
                  return `justify-content: left;`;
              case p[bp].justifyRight:
                  return `justify-content: right;`;
              case p[bp].justifyCenter:
                  return `justify-content: center;`;
            }
          }}
          ${p => {
            switch(true) {
              case p[bp].alignBaseline:
                return `align-items: baseline;`;
              case p[bp].alignCenter:
                return `align-items: center;`;
              case p[bp].alignStart:
                return `align-items: start;`;
              case p[bp].alignEnd:
                return `align-items: end;`;
              case p[bp].alignflexStart:
                return `align-items: flex-start;`;
              case p[bp].alignFlexEnd:
                return `align-items: flex-end;`;
              case p[bp].alignLeft:
                return `align-items: left;`;
              case p[bp].alignRight:
                return `align-items: right`;
              }
          }}
      `}
    `;
  } else {
    return memo;
  }},'')}
`;

