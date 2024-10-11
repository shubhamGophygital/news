import Footer from "./Footer";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-red-300 h-auto">{children}</main>
      <Footer />
    </>
  );
}
