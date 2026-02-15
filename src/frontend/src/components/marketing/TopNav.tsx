import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Funngro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              currentPath === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              currentPath === '/how-it-works' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            How It Works
          </Link>
          <Button asChild size="default" className="ml-4">
            <Link to="/how-it-works">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === '/how-it-works' ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Button asChild size="default" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/how-it-works">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
