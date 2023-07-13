import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Esportas - Nextjs</title>
      <Component {...pageProps} />;
    </>
  );
}
