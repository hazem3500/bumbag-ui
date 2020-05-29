import getDefaultPalette from '../theme/palette';
import { css, cssClass } from '../styled';
import { borderRadius, darken, palette, space, theme, fontSize, fontWeight } from '../utils';

const defaultPalette = getDefaultPalette({});

export const Button = styleProps => cssClass`
  align-items: center;
  background-color: ${palette(styleProps.palette)(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${fontWeight('semibold')(styleProps)};
  min-height: 2.75rem;
  justify-content: center;
  padding: 0 ${space(4)(styleProps)}rem;
  text-decoration: none;
  hyphens: auto;
  transition: box-shadow 0.1s ease-in-out 0s, border 0.1s, background-color 0.1s;

  ${styleProps.palette === 'default' &&
    css`
      border: 1px solid ${palette('white900')(styleProps)};
    `}

  &[disabled],
  &[aria-disabled="true"] {
    ${getDisabledProperties(styleProps)};
  }

  ${styleProps.size && getSizeProperties(styleProps)}
  ${styleProps.isLoading && getLoadingProperties(styleProps)};
  ${styleProps.isStatic && getStaticProperties(styleProps)};
  ${isInteractive(styleProps) && getInteractiveProperties(styleProps)};

  ${styleProps.variant === 'outlined' && getOutlinedProperties(styleProps)};
  ${styleProps.variant === 'link' && getLinkProperties(styleProps)};
  ${styleProps.variant === 'ghost' && getGhostProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ButtonIcon = styleProps => cssClass`
  ${styleProps.isBefore &&
    css`
      margin-left: -${space(1)(styleProps)}em;
      margin-right: ${space(2)(styleProps)}em;

      & {
        ${theme(styleProps.themeKey, `css.before`)(styleProps)};
      }
    `};

  ${styleProps.isAfter &&
    css`
      margin-left: ${space(2)(styleProps)}em;
      margin-right: -${space(1)(styleProps)}em;

      & {
        ${theme(styleProps.themeKey, `css.after`)(styleProps)};
      }
    `};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ButtonSpinnerWrapper = styleProps => cssClass`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & + .fp-Text {
    opacity: 0;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ButtonSpinner = styleProps => cssClass`
  && {
    font-size: 1.25em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ButtonClose = styleProps => cssClass`
  && {
    min-height: unset;
    padding: ${space(2)(styleProps)}em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const isInteractive = styleProps => !styleProps.isStatic && !styleProps.isLoading && !styleProps.disabled;

export const getDisabledProperties = styleProps => css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
  & {
    ${theme(styleProps.themeKey, `css.disabled`)(styleProps)};
  }
`;

export const getSizeProperties = styleProps => {
  const styles = {
    small: css`
      & {
        font-size: ${fontSize('100')(styleProps)}em;
        min-height: 2rem;
        padding: 0 ${space(3)(styleProps)}rem;
      }
      & {
        ${theme(styleProps.themeKey, `css.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(styleProps.themeKey, `css.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      & {
        min-height: 3rem;
        padding: 0 ${space(5)(styleProps)}rem;
      }
      & {
        ${theme(styleProps.themeKey, `css.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      & {
        font-size: ${fontSize('300')(styleProps)}em;
        min-height: 3.25rem;
        padding: 0 ${space(6)(styleProps)}rem;
      }
      & {
        ${theme(styleProps.themeKey, `css.sizes.large`)(styleProps)};
      }
    `
  };
  return styles[styleProps.size];
};

export const getLoadingProperties = styleProps => css`
  & {
    cursor: not-allowed;
    position: relative;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme(styleProps.themeKey, `css.loading`)(styleProps)};
  }
`;

export const getStaticProperties = styleProps => css`
  & {
    cursor: default;
    outline: unset;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme(styleProps.themeKey, `css.static`)(styleProps)};
  }
`;

export const getInteractiveProperties = styleProps => css`
  &:focus {
    outline: unset;
    z-index: 2;
    box-shadow: ${palette(styleProps.palette === 'default' ? 'gray100' : styleProps.palette)(styleProps)} 0px 0px 0px
        1px,
      ${palette(styleProps.palette === 'default' ? 'white900' : `${styleProps.palette}200`)(styleProps)} 0px 0px 0px 3px;

    ${styleProps.palette === 'default' &&
      css`
        border-color: transparent;
      `};

    ${theme(styleProps.themeKey, `css.focus`)(styleProps)};
  }

  ${styleProps.variant !== 'link' &&
    css`
      &:hover {
        background-color: ${darken(0.05, palette(styleProps.palette)(styleProps))};

        & {
          ${theme(styleProps.themeKey, `css.hover`)(styleProps)};
        }
      }
    `};

  ${styleProps.variant !== 'link' &&
    css`
      &:hover:active {
        background-color: ${darken(0.15, palette(styleProps.palette)(styleProps))};

        & {
          ${theme(styleProps.themeKey, `css.hoveractive`)(styleProps)};
        }
      }
    `};
`;

export const getLinkProperties = styleProps => css`
  & {
    border: 0;
    background: unset;
    color: ${styleProps.palette === 'default'
      ? palette('text', defaultPalette.text)(styleProps)
      : palette(styleProps.palette)(styleProps)};
    fill: ${styleProps.palette === 'default'
      ? palette('text', defaultPalette.text)(styleProps)
      : palette(styleProps.palette)(styleProps)};
    text-decoration: underline;
    box-shadow: unset;

    &:hover {
      color: ${styleProps.palette === 'default'
        ? darken(0.5, palette('text', defaultPalette.text)(styleProps))
        : darken(0.5, palette(styleProps.palette)(styleProps))};
      fill: ${styleProps.palette === 'default'
        ? darken(0.5, palette('text', defaultPalette.text)(styleProps))
        : darken(0.5, palette(styleProps.palette)(styleProps))};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.link`)(styleProps)};
  }
`;

export const getOutlinedProperties = styleProps => css`
  & {
    background-color: unset;
    border: 1px solid ${palette()(styleProps)};
    color: ${palette()(styleProps)};
    fill: ${palette()(styleProps)};
    box-shadow: unset;

    ${isInteractive(styleProps) &&
      css`
        &:hover {
          background-color: ${palette()(styleProps)};
          color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
          fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        }
      `};
  }
  & {
    ${theme(styleProps.themeKey, `css.outlined`)(styleProps)};
  }
`;

export const getGhostProperties = styleProps => css`
  & {
    background-color: unset;
    border: unset;
    color: ${styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette()(styleProps)};
    fill: ${styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette()(styleProps)};
    box-shadow: unset;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    &:hover:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  & {
    ${theme(styleProps.themeKey, `css.ghost`)(styleProps)};
  }
`;
