export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-[#0B0C11] text-[#EDEDEE]">
      <body>{children}</body>
    </html>
  );
}
