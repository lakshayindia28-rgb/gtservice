import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Shield, X } from "lucide-react";

type ServiceLink = { name: string; path: string };
type DesktopIndicator = { left: number; width: number; opacity: number };
type MobileIndicator = { top: number; left: number; width: number; opacity: number };

const serviceSections: Array<{ title: string; items: ServiceLink[] }> = [
  {
    title: "Verification",
    items: [
      { name: "Investigation", path: "/services/investigation" },
      { name: "Address Verification", path: "/services/address-verification" },
      { name: "Employment Verification", path: "/services/employment-verification" },
      { name: "Bank Statement Verification", path: "/services/bank-statement-verification" },
      { name: "Form-16 Verification", path: "/services/form-16-verification" },
      { name: "Property Verification", path: "/services/property-verification" },
      { name: "Property Valuation", path: "/services/property-valuation" },
      { name: "RCU / FCU / FI / KYC", path: "/services/rcu-fcu-fi-kyc" },
      { name: "Additional Verification Services", path: "/services/additional-services" },
    ],
  },
  {
    title: "Business & Compliance",
    items: [
      { name: "Business Verification", path: "/services/business-verification" },
      { name: "GST Verification", path: "/services/gst-verification" },
      { name: "ITR Verification", path: "/services/itr-verification" },
      { name: "Taxation & Compliance", path: "/services/taxation" },
      { name: "TIN Facilitation Services", path: "/services/tin-facilitation" },
    ],
  },
  {
    title: "IT & Product",
    items: [
      { name: "Product Discovery", path: "/services/product-discovery" },
      { name: "Product Design (UX/UI)", path: "/services/product-design" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Custom Software", path: "/services/custom-software" },
      { name: "Cloud & DevOps", path: "/services/cloud-devops" },
      { name: "QA & Testing", path: "/services/qa-testing" },
      { name: "Data & AI", path: "/services/data-ai" },
      { name: "Cybersecurity", path: "/services/cybersecurity" },
      { name: "Support & Maintenance", path: "/services/support-maintenance" },
      { name: "Dedicated Teams", path: "/services/dedicated-teams" },
      { name: "API & Integrations", path: "/services/api-integrations" },
    ],
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Industries", path: "/industries" },
  { name: "Network", path: "/network" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Leadership", path: "/leadership" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const desktopLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [desktopIndicator, setDesktopIndicator] = useState<DesktopIndicator>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [mobileIndicator, setMobileIndicator] = useState<MobileIndicator>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
  });

  const isLinkActive = useCallback(
    (path: string) => {
    if (path === "/services") {
      return location.pathname === "/services" || location.pathname.startsWith("/services/");
    }
    return location.pathname === path;
    },
    [location.pathname],
  );

  const activeNavPath = useMemo(() => {
    const servicesLink = "/services";
    const exact = navLinks.find((l) => l.path !== servicesLink && isLinkActive(l.path));
    if (exact) return exact.path;
    if (isLinkActive(servicesLink)) return servicesLink;
    return location.pathname;
  }, [isLinkActive, location.pathname]);

  const updateIndicator = useCallback((
    container: HTMLDivElement | null,
    linkMap: Record<string, HTMLAnchorElement | null>,
    setIndicator: Dispatch<SetStateAction<DesktopIndicator>>,
  ) => {
    if (!container) return;
    const activeEl = linkMap[activeNavPath];
    if (!activeEl) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    const left = Math.max(0, linkRect.left - containerRect.left);
    const width = Math.max(0, linkRect.width);
    setIndicator({ left, width, opacity: 1 });
  }, [activeNavPath]);

  const updateMobileIndicator = useCallback(() => {
    const container = mobileNavRef.current;
    if (!container) return;
    const activeEl = mobileLinkRefs.current[activeNavPath];
    if (!activeEl) {
      setMobileIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();

    const leftPadding = 16;
    const left = Math.max(0, linkRect.left - containerRect.left + leftPadding);
    const width = Math.max(0, linkRect.width - leftPadding * 2);
    const top = Math.max(0, linkRect.bottom - containerRect.top - 6);

    setMobileIndicator({ top, left, width, opacity: 1 });
  }, [activeNavPath]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      updateIndicator(desktopNavRef.current, desktopLinkRefs.current, setDesktopIndicator);
      if (isMobileMenuOpen) {
        updateMobileIndicator();
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [activeNavPath, isMobileMenuOpen, isServicesOpen, isScrolled, updateIndicator, updateMobileIndicator]);

  useEffect(() => {
    const onResize = () => {
      updateIndicator(desktopNavRef.current, desktopLinkRefs.current, setDesktopIndicator);
      if (isMobileMenuOpen) {
        updateMobileIndicator();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeNavPath, isMobileMenuOpen, updateIndicator, updateMobileIndicator]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground leading-tight">GUST TASK</h1>
              <p className="text-xs text-muted-foreground">Services Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={desktopNavRef} className="hidden lg:flex items-center gap-1 relative">
            <motion.div
              aria-hidden="true"
              className="nav-snake absolute -bottom-1 h-[3px] rounded-full"
              animate={{ left: desktopIndicator.left, width: desktopIndicator.width, opacity: desktopIndicator.opacity }}
              transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  ref={(el) => {
                    desktopLinkRefs.current[link.path] = el;
                  }}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    isLinkActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[22rem] md:w-[52rem] rounded-2xl bg-white border border-border p-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[70vh] overflow-auto">
                          {serviceSections.map((section) => (
                            <div key={section.title} className="min-w-0">
                              <div className="px-2 pb-2 text-xs font-semibold tracking-wide text-foreground/60 uppercase">
                                {section.title}
                              </div>
                              <div className="grid gap-1">
                                {section.items.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/login" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-card p-4 overflow-hidden"
            >
              <div ref={mobileNavRef} className="flex flex-col gap-2 relative">
                <motion.div
                  aria-hidden="true"
                  className="nav-snake absolute h-[3px] rounded-full"
                  animate={{
                    top: mobileIndicator.top,
                    left: mobileIndicator.left,
                    width: mobileIndicator.width,
                    opacity: mobileIndicator.opacity,
                  }}
                  transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    ref={(el) => {
                      mobileLinkRefs.current[link.path] = el;
                    }}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isLinkActive(link.path)
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/login" className="btn-primary text-sm text-center mt-2">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
