import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Layout ({ children }) {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}