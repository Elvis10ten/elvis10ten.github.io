import "katex/dist/katex.min.css";
import "./src/styles/global.css";

import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-groovy");
require("prismjs/components/prism-dart");