import "./globals.css";

export const metadata = {
  title: "Sachin Builds",
  description:
    "I'm an engineer by degree, working as an Associate Software Engineer at a small startup, where we are building PAM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
