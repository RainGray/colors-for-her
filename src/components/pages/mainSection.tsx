export const MainSection: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div
      style={{
        flex: "1 0 auto",
        backgroundColor: 'var(--color-secondary-1-0)',
      }}
    >
      {props.children}
    </div>
  );
};
