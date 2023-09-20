

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>AboutNavbar</nav>
      <main>{children}</main>
    </div>
  );
}
