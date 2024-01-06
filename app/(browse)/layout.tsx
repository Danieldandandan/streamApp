import { Navbar } from "./_compoents/navbar";
import { SideBarSkeleton, Sidebar } from "./_compoents/sidebar";
import { Container } from "./_compoents/container";
import { Suspense } from "react";
const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SideBarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
      ;
    </>
  );
};

export default BrowseLayout;
