"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Plate = (function (_super) {
    __extends(Plate, _super);
    function Plate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plate.prototype.render = function () {
        var rectStyle = {
            fill: 'blue'
        };
        var shapes = [];
        for (var i = 0; i < 10; i++) {
            shapes.push(React.createElement("rect", { height: "10", width: "10", x: i * 20, style: rectStyle }));
        }
        return React.createElement("svg", { "background-color": "red", height: this.props.height, width: this.props.width }, shapes);
    };
    return Plate;
}(React.Component));
exports.Plate = Plate;
//# sourceMappingURL=plate.js.map