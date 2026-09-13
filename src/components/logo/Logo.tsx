import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="wordmark" aria-label="Hikaru Suzuki — home">
      hikaru<span>.</span>
      <span className="wordmark-label">SUZUKI</span>
    </Link>
  );
}
