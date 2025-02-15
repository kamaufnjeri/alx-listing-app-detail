import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
