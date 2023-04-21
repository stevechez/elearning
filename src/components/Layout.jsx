import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
}
