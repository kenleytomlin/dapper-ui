import { css } from 'styled-components';
import { em } from 'polished';

export const media = size => (...args) => css`
  @media screen and (min-width: ${em(`${size}px`)}) {
    ${css(...args)}
  }
`;

