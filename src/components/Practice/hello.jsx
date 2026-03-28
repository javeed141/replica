import React, { useState } from "react";

/*
  ZIGZAG SVG MASK DEMO
  
  This demo has NO IntersectionObserver, NO scrolling.
  Just click on items to see how the zigzag + mask works.
  
  3 things happening:
  1. Generate zigzag path from h2/h3 levels
  2. Use mask to cut a gray rect into zigzag shape
  3. Move a small dark rect along the zigzag based on active item
*/

const items = [
  { id: "overview", label: "Overview", level: "h2" },
  { id: "getting-started", label: "Getting Started", level: "h2" },
  { id: "installation", label: "Installation", level: "h3" },
  { id: "configuration", label: "Configuration", level: "h3" },
  { id: "usage", label: "Usage", level: "h2" },
  { id: "basic-example", label: "Basic Example", level: "h3" },
  { id: "advanced-example", label: "Advanced Example", level: "h3" },
  { id: "api-reference", label: "API Reference", level: "h2" },
];

const ITEM_HEIGHT = 30;
const SVG_WIDTH = 14;

// STEP 1: Generate the zigzag path
function generatePath(items) {
  const segments = [];

  items.forEach((item, i) => {
    const x = item.level === "h3" ? 13 : 1;
    const topY = i * ITEM_HEIGHT + 12;
    const bottomY = topY + 18;

    if (i === 0) {
      // First item — just start here
      segments.push(`M ${x} ${topY}`);
    } else {
      const prevX = items[i - 1].level === "h3" ? 13 : 1;

      if (prevX !== x) {
        // Level changed! Draw horizontal step
        segments.push(`L ${prevX} ${topY}`); // down at old x
        segments.push(`L ${x} ${topY}`); // horizontal jump to new x
      } else {
        // Same level — just go straight down
        segments.push(`L ${x} ${topY}`);
      }
    }

    // Draw down through this item
    segments.push(`L ${x} ${bottomY}`);
  });

  return segments.join(" ");
}

export default function ZigzagDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalHeight = items.length * ITEM_HEIGHT;
  const svgPath = generatePath(items);
  const activeTop = 12 + activeIndex * ITEM_HEIGHT;

  return (
    <div style={{ fontFamily: "system-ui", padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Zigzag SVG Mask Demo</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        Click any item to move the dark highlight. No scrolling needed.
      </p>

      <div style={{ display: "flex", gap: 60 }}>
        {/* LEFT SIDE — The actual zigzag TOC */}
        <div>
          <h3 style={{ marginBottom: 16, fontSize: 14, color: "#888" }}>Result</h3>
          <div style={{ position: "relative" }}>
            {/* THE SVG — zigzag line with mask */}
            <svg
              width={SVG_WIDTH}
              height={totalHeight}
              viewBox={`0 0 ${SVG_WIDTH} ${totalHeight}`}
              fill="none"
              style={{ position: "absolute", left: 0, top: 0 }}
            >
              {/* STEP 2: The mask (stencil) — zigzag shape */}
              <mask id="zigzag-mask">
                <path d={svgPath} stroke="white" strokeWidth="1" fill="none" />
              </mask>

              {/* STEP 3a: Gray rect — full height, masked into zigzag */}
              <rect
                width={SVG_WIDTH}
                height={totalHeight}
                fill="#dadada"
                opacity="0.8"
                mask="url(#zigzag-mask)"
              />

              {/* STEP 3b: Dark rect — 18px tall, moves with active item */}
              <rect
                y={activeTop}
                width={SVG_WIDTH}
                height={18}
                fill="#1a1a1a"
                mask="url(#zigzag-mask)"
                style={{ transition: "y 0.3s ease-out" }}
              />
            </svg>

            {/* The clickable links */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: 14,
                    height: ITEM_HEIGHT,
                    paddingLeft: item.level === "h3" ? 36 : 24,
                    paddingTop: 12,
                    color: activeIndex === i ? "#1a1a1a" : "#999",
                    fontWeight: activeIndex === i ? 600 : 400,
                    transition: "all 0.2s",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE — Debug info */}
        <div>
          <h3 style={{ marginBottom: 16, fontSize: 14, color: "#888" }}>Debug Info</h3>
          <div
            style={{
              background: "#f8f8f8",
              borderRadius: 8,
              padding: 20,
              fontSize: 13,
              fontFamily: "monospace",
              lineHeight: 2,
            }}
          >
            <div>activeIndex: <strong>{activeIndex}</strong></div>
            <div>activeTop: <strong>12 + {activeIndex} × 30 = {activeTop}px</strong></div>
            <div>item: <strong>{items[activeIndex].label}</strong></div>
            <div>level: <strong>{items[activeIndex].level}</strong></div>
            <div>
              x position: <strong>{items[activeIndex].level === "h3" ? 13 : 1}</strong>
              {items[activeIndex].level === "h3" ? " (indented)" : " (left edge)"}
            </div>

            <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #ddd" }} />

            <div style={{ marginBottom: 8, fontWeight: 600 }}>All coordinates:</div>
            {items.map((item, i) => {
              const x = item.level === "h3" ? 13 : 1;
              const topY = i * ITEM_HEIGHT + 12;
              const bottomY = topY + 18;
              return (
                <div
                  key={item.id}
                  style={{
                    color: activeIndex === i ? "#1a1a1a" : "#aaa",
                    fontWeight: activeIndex === i ? 600 : 400,
                  }}
                >
                  [{i}] x={x} topY={topY} bottomY={bottomY} ({item.level})
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — SVG path string */}
        <div>
          <h3 style={{ marginBottom: 16, fontSize: 14, color: "#888" }}>SVG Path</h3>
          <div
            style={{
              background: "#1a1a1a",
              color: "#e0e0e0",
              borderRadius: 8,
              padding: 20,
              fontSize: 12,
              fontFamily: "monospace",
              lineHeight: 2.2,
              maxWidth: 260,
            }}
          >
            {svgPath.split(/(?=[ML])/).map((segment, i) => {
              const trimmed = segment.trim();
              const isMove = trimmed.startsWith("M");
              return (
                <div key={i}>
                  <span style={{ color: isMove ? "#f59e0b" : "#60a5fa" }}>
                    {trimmed}
                  </span>
                </div>
              );
            })}
          </div>

          <h3 style={{ marginBottom: 16, marginTop: 24, fontSize: 14, color: "#888" }}>
            Visual Map
          </h3>
          <pre
            style={{
              background: "#f8f8f8",
              borderRadius: 8,
              padding: 20,
              fontSize: 11,
              lineHeight: 1.6,
              color: "#555",
            }}
          >
{`x=1         x=13

 │  Overview (h2)
 │
 │  Getting Started (h2)
 │
 └──────────┐
             │  Installation (h3)
             │
             │  Configuration (h3)
 ┌───────────┘
 │
 │  Usage (h2)
 │
 └──────────┐
             │  Basic Example (h3)
             │
             │  Advanced Example (h3)
 ┌───────────┘
 │
 │  API Reference (h2)`}
          </pre>
        </div>
      </div>
    </div>
  );
}