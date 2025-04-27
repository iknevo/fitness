import { Outlet } from "react-router";
import Aside from "../ui/Aside";
import Header from "../ui/Header";

export default function DefaultLayout() {
  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-[66px_1fr] h-screen">
      <Aside />
      <Header />
      <main className="bg-black col-start-2">
        <Outlet />
      </main>
    </div>
  );
}
