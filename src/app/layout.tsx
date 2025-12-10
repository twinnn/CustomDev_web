import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="font-silka-500">
      <body>
        <div className="fixed top-0 left-0 w-full h-16 z-50 bg-[#0D1128]/15 backdrop-blur-sm">
          <Navbar />
        </div>
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
