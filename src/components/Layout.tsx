import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

const Layout = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onQuoteClick={() => setQuoteOpen(true)} />
      <main className="pt-16">
        <Outlet context={{ openQuote: () => setQuoteOpen(true) }} />
      </main>
      <Footer onQuoteClick={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
};

export default Layout;

export function useQuote() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { openQuote } = (window as any).__outletContext || {};
  return { openQuote: openQuote || (() => {}) };
}
