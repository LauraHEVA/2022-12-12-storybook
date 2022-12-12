import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">80's movies</h1>
        <nav className="main-navigation">
          <ul>
            <li>
              <a href="fantasy">Fantasy</a>
            </li>
            <li>
              <a href="fantasy">Comedy</a>
            </li>
            <li>
              <a href="fantasy">Terror</a>
            </li>
            <li>
              <a href="fantasy">Sci-Fi</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
