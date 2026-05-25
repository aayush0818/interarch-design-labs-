import { Outlet, Link, createFileRoute, redirect, useRouterState } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CustomCursor } from "@/components/home/CustomCursor";

export const Route = createFileRoute("/studio")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/studio" || location.pathname === "/studio/") {
      throw redirect({ to: "/studio/about" });
    }
  },
  component: StudioLayout,
});

function StudioLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <CustomCursor />
      <Header />
      <div className="idl-studio-tabs">
        <Link to="/studio/about" data-hover className={pathname.endsWith("/about") ? "is-on" : ""}>About</Link>
        <Link to="/studio/team" data-hover className={pathname.endsWith("/team") ? "is-on" : ""}>Team</Link>
      </div>
      <main className="idl-studio-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
