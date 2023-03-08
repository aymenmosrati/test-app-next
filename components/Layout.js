import Navbar from "./Navbar";
function Layout(props) {
  return (
    <>
      <Navbar />
      <h1>Hello From Layout</h1>
      {props.children}
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
