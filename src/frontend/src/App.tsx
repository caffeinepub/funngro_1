import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import MarketingLayout from './components/marketing/MarketingLayout';
import TeenLandingPage from './pages/TeenLandingPage';
import TeenDetailsPage from './pages/TeenDetailsPage';

const rootRoute = createRootRoute({
  component: () => (
    <MarketingLayout>
      <Outlet />
    </MarketingLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TeenLandingPage,
});

const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/how-it-works',
  component: TeenDetailsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, detailsRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
