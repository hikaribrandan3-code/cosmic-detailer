import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background hero-gradient grid-bg">
      <div className="text-center px-6">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">// ERROR 404</p>
        <h1 className="text-[120px] lg:text-[180px] font-black leading-none tracking-tighter text-white/10 select-none">
          404
        </h1>
        <h2 className="text-2xl lg:text-4xl font-black italic uppercase tracking-tighter text-white -mt-8 mb-4">
          Page Not <span className="text-primary text-glow">Found</span>
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-10 max-w-sm mx-auto">
          This route doesn't exist. Head back and we'll get you where you need to go.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-primary/90 transition-all box-glow"
        >
          Return Home →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
