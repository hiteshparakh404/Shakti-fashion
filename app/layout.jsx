import "./globals.css";

export const metadata = {
  title: "Shiv Shakti Fashion | Surat Fashion Showroom",
  description:
    "Premium kids, men's, ethnic, wedding, festive and party wear showroom in Surat."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
