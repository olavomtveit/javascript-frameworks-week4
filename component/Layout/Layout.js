import Head from "../Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head
        title="Games for you"
        description="A fancy website for you"
        author="Olav Omtveit"
        keyWords="news, js"
      />
      <Header content="Games for you" />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
