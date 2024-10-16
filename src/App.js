import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import navConstants from "./constants/navStrings";
import Fallback from "./components/Fallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsCategoriesPage = lazy(() => import("./pages/NewsCategoriesPage"));
const NewsCategoryPage = lazy(() => import("./pages/NewsCategoryPage"));
const NewsSourcesPage = lazy(() => import("./pages/NewsSourcesPage"));

const router = createBrowserRouter([
  {
    path: navConstants.HOME,
    element: <HomePage />,
  },
  {
    path: navConstants.CATEGORIES,
    element: <NewsCategoriesPage />,
  },
  {
    path: navConstants.CATEGORY_NAME,
    element: <NewsCategoryPage />,
  },
  {
    path: navConstants.SOURCES,
    element: <NewsSourcesPage />,
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
}
