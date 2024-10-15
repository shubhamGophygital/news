import Footer from "./Footer";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="w-11/12 sm:w-10/12 p-3 sm:p-6 rounded-lg m-auto max-w-screen-2xl bg-white my-3 sm:my-6 mt-[82px] sm:mt-[90px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
