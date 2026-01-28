// import { dia } from "jointjs";

// export function createTank({ id, x, y, label }) {
//   return new dia.Element({
//     type: "rocket.Tank",   
//     id,
//     position: { x, y },
//     size: { width: 60, height: 140 },
//     attrs: {
//       body: {
//         refWidth: "100%",
//         refHeight: "100%",
//         // fill: "#111827",
//         // stroke: "#243145",
//         fill: "red",
//         stroke: "yellow",
//         rx: 30,
//         ry: 30
//       },
//       label: {
//         text: label,
//         fill: "#9ca3af",
//         fontSize: 12,
//         textAnchor: "middle",
//         ref: "body",
//         ferX: "50%",
//         refY: -10
//       }
//     },
//     markup: [
//       { tagName: "rect", selector: "body" },
//       { tagName: "text", selector: "label" }
//     ],
//   });
// }