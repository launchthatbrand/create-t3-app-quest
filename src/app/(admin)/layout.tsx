import Header from "../_components/Header";
import Sidebar from "../_components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </>
  );
}
