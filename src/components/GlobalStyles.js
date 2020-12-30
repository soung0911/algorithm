import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '../../node_modules/github-markdown-css/github-markdown.css';

export default createGlobalStyle`
	${normalize};

	a {
		text-decoration:none;
		color:inherit;
	}
	* {
	}

	body {
		text-rendering: optimizeLegibility;
		font-family: helvetica neue,Helvetica,Arial,sans-serif;
		font-size: 14px;
		letter-spacing: .2px;
		height: 100%;
	}
`;
