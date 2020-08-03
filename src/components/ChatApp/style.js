import styled, { css } from "styled-components";

const Nav = styled.div`
  flex-shrink: 0;

  position: relative;
  z-index: 100;
`;

const Sidebar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gradiantGray};

  position: relative;
  z-index: 50;
  > div {
    /* 需要开启gpu加速 提高性能 */
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`;

const Content = styled.main`
  flex: 2;
  position: relative;
`;

const Drawer = styled.div`
  max-width: 310px;
  width: 0;
  ${({ show }) =>
    show &&
    css`
      width: 310px;
    `}
`;

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default StyledChatApp;
export { Nav, Sidebar, Content, Drawer };
