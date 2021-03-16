import Head from "../Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head
        title="News for you"
        description="A fancy website for you"
        author="Olav Omtveit"
        keyWords="news, js"
      />
      <Header content="News for you" />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
