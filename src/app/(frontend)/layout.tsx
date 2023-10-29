import Sidebar from "../_components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar showFixed={false} />
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}
