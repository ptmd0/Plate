import * as React from "react";

export interface PlateProperties 
{ 
    height: number;
    width: number;
    rows: number; 
    columns: number; 
}

export interface PlateState
{ 
    background: string; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Plate extends React.Component<PlateProperties, PlateState> {
    render() {
        const rectStyle = {
            fill: 'blue'
        };
        var shapes = [];
for (var i=0; i < 10; i++) {
    shapes.push(<rect height="10" width="10" x={i*20} style={rectStyle}></rect>);
}
        return <svg background-color="red" height={this.props.height} width={this.props.width}>
            {shapes}
        </svg>;
    }
}