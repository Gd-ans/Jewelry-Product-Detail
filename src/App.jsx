import React, { Suspense, lazy } from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import "./styles/global.scss";

// Lazy load components
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const Header = lazy(() => import("./layout/Header/Header"));

function App() {
  return (
    <>
      <CurrencyProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <ProductDetailPage />
        </Suspense>
      </CurrencyProvider>
    </>
  );
}

export default App;
