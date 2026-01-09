import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { MainLayout } from "@/layouts/MainLayout";

// Pages
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import CoreBanking from "./pages/CoreBanking";
import DigitalLending from "./pages/DigitalLending";
import PaymentGateway from "./pages/payments/PaymentGateway";
import ComplianceRegulatory from "./pages/ComplianceRegulatory";
import AccountManagement from "./pages/AccountManagement";
import Collections from "./pages/collections/Collections";
import Payments from "./pages/payments/Payments";
import Service from "./pages/service/Service";
import UPICollection from "./pages/collections/UPICollection";
import SimpliCollect from "./pages/collections/SimpliCollect";
import RecurringCollections from "./pages/collections/RecurringCollections";
import QRCollection from "./pages/collections/QRCollection";
import UPISolutions from "./pages/payments/UPISolutions";
import CardProcessing from "./pages/payments/CardProcessing";
import DigitalWallets from "./pages/payments/DigitalWallets";
import BNPL from "./pages/payments/BNPL";
import CrossBorderPayments from "./pages/payments/CrossBorderPayments";
import InsuranceTech from "./pages/service/InsuranceTech";
import LendingPlatform from "./pages/service/LendingPlatform";
import WealthManagement from "./pages/service/WealthManagement";
import BBPS from "./pages/service/BBPS";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Travel Pages
import Travel from "./pages/travel";
import FlightPage from "./pages/travel/flight";
import BusPage from "./pages/travel/bus";
import HotelPage from "./pages/travel/hotel";
import TourPage from "./pages/travel/tour";




// Legal Pages
import { LegalLayout } from "./layouts/LegalLayout";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import RefundPolicy from "./pages/Legal/RefundPolicy";
import Partner from "./pages/Partner";

import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/insurance" element={<InsuranceTech />} />
            <Route path="/service/lending" element={<LendingPlatform />} />
            <Route path="/service/wealth" element={<WealthManagement />} />
            <Route path="/service/bbps" element={<BBPS />} />

            <Route path="/banking" element={<CategoryPage />} />
            <Route path="/security" element={<CategoryPage />} />
            <Route path="/analytics" element={<CategoryPage />} />
            <Route path="/wallets" element={<CategoryPage />} />
            <Route path="/automation" element={<CategoryPage />} />

            {/* Collections Subcategories */}
            <Route path="/collections/upi-collection" element={<UPICollection />} />
            <Route path="/collections/simpli-collect" element={<SimpliCollect />} />
            <Route path="/collections/recurring" element={<RecurringCollections />} />
            <Route path="/collections/qr-collection" element={<QRCollection />} />
            <Route path="/collections/core-banking" element={<CoreBanking />} />
            <Route path="/collections/digital-lending" element={<DigitalLending />} />
            <Route path="/collections/compliance" element={<ComplianceRegulatory />} />
            <Route path="/collections/accounts" element={<AccountManagement />} />

            {/* Payments Subcategories */}
            <Route path="/payments/gateway" element={<PaymentGateway />} />
            <Route path="/payments/upi" element={<UPISolutions />} />
            <Route path="/payments/cards" element={<CardProcessing />} />
            <Route path="/payments/wallets" element={<DigitalWallets />} />
            <Route path="/payments/bnpl" element={<BNPL />} />
            <Route path="/payments/cross-border" element={<CrossBorderPayments />} />

            {/* Travel Routes */}
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/flight" element={<FlightPage />} />
            <Route path="/travel/bus" element={<BusPage />} />
            <Route path="/travel/hotel" element={<HotelPage />} />
            <Route path="/travel/tour" element={<TourPage />} />

            {/* 404 - Not Found */}
            <Route path="*" element={<NotFound />} />
          </Route>


          {/* Legal Routes (Without Navbar) */}
          <Route element={<LegalLayout />}>
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
            <Route path="/legal/refund-policy" element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
