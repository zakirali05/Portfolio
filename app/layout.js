import "./globals.css";

export const metadata = {
  title: "ZakirAli's Portfolio",
  description: "Mern stack webdeveloper and a freelancer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
