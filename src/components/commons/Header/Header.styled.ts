import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px;
${breakpointMedia({
    md: css`
    padding: 0 30px;

    `,
  })}
`;

export default HeaderWrapper;
