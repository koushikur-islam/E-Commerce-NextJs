import NavBar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <NavBar></NavBar>
        <Main>{children}</Main>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Layout;
