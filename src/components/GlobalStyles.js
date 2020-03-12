import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
	${normalize};

	body {
		text-rendering: optimizeLegibility;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    letter-spacing: .2px;
		height: 100%;
	}
`;