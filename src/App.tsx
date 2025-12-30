import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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



import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/insurance" element={<InsuranceTech />} />
          <Route path="/service/lending" element={<LendingPlatform />} />
          <Route path="/service/wealth" element={<WealthManagement />} />

          <Route path="/banking" element={<CategoryPage />} />
          <Route path="/payments" element={<CategoryPage />} />
          <Route path="/security" element={<CategoryPage />} />
          <Route path="/analytics" element={<CategoryPage />} />
          <Route path="/wallets" element={<CategoryPage />} />
          <Route path="/automation" element={<CategoryPage />} />
          {/* Collections Subcategories */}
          <Route path="/collections/upi" element={<UPICollection />} />
          <Route path="/collections/simpli-collect" element={<SimpliCollect />} />
          <Route path="/collections/recurring" element={<RecurringCollections />} />
          <Route path="/collections/qr" element={<QRCollection />} />

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
