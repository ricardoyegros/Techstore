import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
export default function Layout ({ children }) {
  return (
    <div>
      <div>
        <Header />
        <SideBar children={children} />
      </div>
      <Footer />
    </div>
  )
}