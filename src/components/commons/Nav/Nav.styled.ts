import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display: flex;
margin-left: auto;
width: fit-content;
`;

const LinkList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
width:200px;
/* background-color: blue; */

${breakpointMedia({
    md: css`
    flex-direction: row;
    width:auto;
    `,
  })}
`;

const LinkItem = styled.li`
display: flex;
`;

export { NavWrapper, LinkList, LinkItem };
