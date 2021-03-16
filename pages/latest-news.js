import Layout from "../component/Layout/Layout";
import styles from "../styles/About.module.css";

export default function LatestNews({ content }) {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h1>Latest News</h1>
          <p>What's up in the world? Today.</p>
        </div>
      </Layout>
    </>
  );
}
