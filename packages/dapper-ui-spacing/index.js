import styled, { css } from 'styled-components'
import orderBy from 'lodash.orderby'
import {
  padding,
  margin,
  rem
} from 'polished'
import {
  media
} from '../responsive'

export const SPACING_THEME = {
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '30px',
    xl: '50px',
    xxl: '70px'
  }
}

const getDefinedBreakpoints = p => {
  const breakpoints = Object.keys(p.theme.grid.breakpoints);
  return orderBy(
    Object.keys(p)
    .filter(k =>  Object.keys(breakpoints).includes(k)) ,k => (Object.keys(breakpoints.indexOf(k))
    )
  )
};

const spacerTypes = {
  padding,
  margin
};

const spacer = type => (p,memo) => (
  css`
    ${memo}
    ${media[bp]`
    ${spacerTypes[type](
      rem(`${spacing[p[bp].top]}px`) || '0px',
      rem(`${spacing[p[bp].right]}px`) || '0px',
      rem(`${spacing[p[bp].bottom]}px`) || '0px',
      rem(`${spacing[p[bp].left]}px`) || '0px'
    )}`
  }`
);

const zeroSpacer = type => (p,memo) => (
  css`
    ${memo}
    ${media[bp]`${spacerTypes[type](0)}`}
  `
);

export const Pad = styled.div`
  ${p => {
    const spacing = p.theme.spacing
    return getDefinedBreakpoints(p).reduce((memo,bp) => {
      if(p[bp] !== false) {
        return spacer('padding')(p,memo);
      } else {
        return zeroSpacer('padding')(p,memo);
      }
    },'')}
  }
`;

export const Margin = styled.div`
  ${p => {
    const spacing = p.theme.spacing
    return getDefinedBreakpoints(p).reduce((memo,bp) => {
      if(p[bp] !== false) {
        return spacer('margin')(p,memo);
      } else {
        return zeroSpacer('margin')(p,memo);
      }
    },'')}
  }
`;

