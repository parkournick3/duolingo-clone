import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="h-full mx-auto max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
}
