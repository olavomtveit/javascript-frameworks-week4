import Link from "next/link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-header">
        <nav>
          <span>{content}</span>
          <Link href="/">Home</Link> |{" "}
          <Link href="/latest-news">Latest News</Link>
        </nav>
      </header>
    </>
  );
}
