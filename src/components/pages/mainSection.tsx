export const MainSection: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="main-section">
      <p> Main Section </p>
      {props.children}
    </div>
  );
};
