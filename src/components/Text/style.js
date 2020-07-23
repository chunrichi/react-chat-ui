import styled, { css } from "styled-components";

// 类型变体
const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

// 字体大小变体
const sizeVariants = {
  normal: css`
    ${({ theme }) => theme.normal}
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsamll: css`
    ${({ theme }) => theme.xxsamll}
  `,
};

const StyledText = styled.span`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => bold && `font-weight: 500`}
`;

export default StyledText;
