import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";
import Icon from "components/Icon";

// 社交链接
const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`;

// 联系方式页
const ContactSection = styled.section`
  display: grid;
  /* 行间距 */
  row-gap: 18px;
`;

// 相册容器
const AlbumSection = styled.section``;
// 相册标题
const AlbumTitle = styled.div`
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`;
// 相册
const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`;

// 关闭按钮
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

const StyledProfile = styled.div`
  display: grid;
  /* 靠上 + 水平居中 */
  align-content: start;
  justify-content: center;
  justify-items: center;
  /* 相对定位 */
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  /* 自动显示滚动条 */
  overflow-y: auto;
`;

export default StyledProfile;
export {
  SocialLinks,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
  CloseIcon,
};
