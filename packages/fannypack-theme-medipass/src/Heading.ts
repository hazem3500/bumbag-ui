import { css, fontWeight } from 'fannypack';

export default {
  css: {
    root: props => css`
      font-weight: ${fontWeight('semibold')(props)};
    `
  },
  h6: {
    css: {
      root: css`
        font-size: 1.125rem;
      `
    }
  }
};