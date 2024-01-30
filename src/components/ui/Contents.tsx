"use client";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      {children}
    </div>
  );
};

export default Contents;
