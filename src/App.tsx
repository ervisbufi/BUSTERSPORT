/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Wishlist } from './pages/Wishlist';
import { About } from './pages/About';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Refund } from './pages/Refund';
import { Shipping } from './pages/Shipping';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "about", element: <About /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "refund", element: <Refund /> },
      { path: "shipping", element: <Shipping /> },
    ]
  }
]);

export default function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  );
}
