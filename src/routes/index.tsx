import NotFound from '@/pages/errors/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const Layout = lazy(
    () => import('@/layout/layout')
);
const Dashboard = lazy(
    () => import('@/pages/dashboard/dashboard')
);
const Property = lazy(
    () => import('@/pages/dashboard/property')
);

export default function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet />
                        </Suspense>
                    </Layout>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="property" element={<Property />} />
                
                <Route path="*" element={<Navigate to="/404" replace />} />
                <Route path="/404" element={<NotFound />} />
            </Route>
        </Routes>
    );
}