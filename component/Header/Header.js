import Link from "next/link";

export default function Header({ content }) {
  return (
    <>
      <header className="app-header">
        <nav>
          <span>
            <b>{content}</b>
          </span>{" "}
          | <Link href="/">Home</Link> | <Link href="/games">Games</Link>
        </nav>
      </header>
    </>
  );
}
