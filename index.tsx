import * as React from "react";
import * as ReactDOM from "react-dom";

import { Plate } from "./plate";

ReactDOM.render(
    <Plate width={300} height={100} rows={8} columns={12} />,
    document.getElementById("example")
);