import "./style.css";

export function VerticalDivider(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1px",
        height: "100%",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.1) 100% )",
        margin: 20,
      }}
    >
      <p style={{ height: "100%" }}></p>
    </div>
  );
}
