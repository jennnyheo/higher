import Nav from "./Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
