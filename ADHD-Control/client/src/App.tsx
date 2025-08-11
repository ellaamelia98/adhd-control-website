import { useState, useEffect } from "react";
import { Switch, Route, Link, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import QuickResets from "@/pages/quick-resets";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import BlogCategory from "@/pages/blog-category";
import Resources from "@/pages/resources";
import ProductReviews from "@/pages/product-reviews";
import About from "@/pages/about";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top when navigating between pages
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/category/:category" component={BlogCategory} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/resources" component={Resources} />
          <Route path="/product-reviews" component={ProductReviews} />
          <Route path="/about" component={About} />
          <Route path="/quick-resets" component={QuickResets} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
