// React wrapper for JointJS

import { useEffect, useRef } from "react";
import { dia, shapes } from '@joint/core';
import createRocketDiagram from "../diagrams/createRocketDiagram";

export default function RocketDiagram() {
    const paperRef = useRef(null);

    useEffect(() => {
        const namespace = shapes;

        const graph = new dia.Graph({}, { cellNamespace: namespace });

        const paper = new dia.Paper({
            el: paperRef.current,   
            model: graph,
            width: 400,
            height: 750,
            background: { color: '#203057' },
            cellViewNamespace: namespace
        });

        // optional test shape so you SEE something
        const tank = new shapes.standard.Cylinder();
        tank.position(150, 50);
        tank.resize(70, 180);
        tank.attr({
            body: { fill: '#d8d2d7' },
            label: { text: '1 temp and pressure', fill: '#000' }
        });
        const tank1 = new shapes.standard.Cylinder();
        tank1.position(150, 300);
        tank1.resize(70, 180);
        tank1.attr({
            body: { fill: '#d8d2d7' },
            label: { text: 'temp and pressure', fill: '#000' }
        });
        const tank2 = new shapes.standard.Cylinder();
        tank2.position(150, 550);
        tank2.resize(70, 180);
        tank2.attr({
            body: { fill: '#d8d2d7' },
            label: { text: 'temp and pressure', fill: '#000' }
        });
        tank.addTo(graph);
        tank1.addTo(graph);
        tank2.addTo(graph);

    }, []);

    return (
        <div>
            
            <div
                ref={paperRef}
                style={{
                    width: 400,
                    height: 750,
                    border: 'none'
                }}
            />
        </div>
    );
}
