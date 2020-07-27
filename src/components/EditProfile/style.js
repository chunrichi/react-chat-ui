import styled from "styled-components";
import Text from "components/Text";

const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`;

const GenderAndRegion = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: space-between;
`;

const StyleIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`;

const StyledEditProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`;

const SelectGroup = styled.div`
  & > * {
    margin: 0 4px;
  }
  margin: 0 -4px;
`;

export default StyledEditProfile;
export { GroupTitle, GenderAndRegion, SelectGroup, StyleIconInput };
