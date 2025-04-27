import Header from "../components/Header"
import SideBar from "../components/SideBar";
import Contact from "../components/contact/Contact";

function ContactPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1 }}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
