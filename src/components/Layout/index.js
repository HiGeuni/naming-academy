import Header from "../Header";

const Layout = ({ children, user }) => {
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
};

export default Layout;
