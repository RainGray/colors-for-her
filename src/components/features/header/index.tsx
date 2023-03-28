export const Header = (): JSX.Element => {
  return (
    <div
      style={{
        fontFamily: "Playball",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexShrink: 0,
        color: "var(--color-primary-3)",
      }}
    >
      <p style={{ fontSize: 65, fontWeight: "bold", margin: 5 }}>
        Colors for Her
      </p>
    </div>
  );
};
