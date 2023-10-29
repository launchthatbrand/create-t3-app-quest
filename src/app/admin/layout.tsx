import SideBarNav from "../_components/SideBarNav";
import Sidebar from "../_components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <Sidebar showFixed={true} navBar={<SideBarNav />} />
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}
