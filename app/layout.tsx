import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Store",
  description: "Starter e‑commerce pilot with Ask AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="font-semibold">
              Pilot Store
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/admin" className="hover:underline">
                Admin
              </Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Pilot Store
          </div>
        </footer>
      </body>
    </html>
  );
}
