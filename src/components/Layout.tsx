import Navbar from "./navbar/navbar";

type Props = {
  test: string;
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
