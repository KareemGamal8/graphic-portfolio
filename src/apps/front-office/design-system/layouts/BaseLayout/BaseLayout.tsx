import { Toaster } from "react-hot-toast";
import AffixButton from "../../buttons/AffixButton";
import WhatsappButton from "../../buttons/WhatsappButton";
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
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#0f0714",
            color: "white",
            border: "3px solid #1c263d",
            fontWeight: 600,
          },
        }}
      />
      <div className="flex flex-col min-h-[100vh] relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <AffixButton />
        <WhatsappButton />
      </div>
    </>
  );
}
