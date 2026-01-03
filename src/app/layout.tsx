import "./globals.css";
import "flowbite";

export const metadata = {
  title: "Web App",
  description: "Admin + POS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
