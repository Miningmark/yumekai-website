import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Seite nicht gefunden | YumeKai</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>404 - Seite nicht gefunden</h1>
      <p>Die Seite, die du suchst, existiert nicht.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </>
  );
}
