import "katex/dist/katex.min.css";
import "./src/styles/global.css";

import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-kotlin");