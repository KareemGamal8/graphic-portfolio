import AffixButton from "../../buttons/AffixButton";
import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <Header />
      <main>{children}</main>
      <Footer />
      <AffixButton />
    </div>
  );
}
