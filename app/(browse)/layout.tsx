import { Navbar } from "./_compoents/navbar";
import { Sidebar } from "./_compoents/sidebar";
import { Container } from "./_compoents/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
      ;
    </>
  );
};

export default BrowseLayout;
