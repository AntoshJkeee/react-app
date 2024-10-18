import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ROUTER_PATHS } from './shared/constants/routes';
import Layout from './Layout';
import { AboutPage, BlogDetailPage, BlogPage, HomePage, NotFoundPage } from './pages';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={ROUTER_PATHS.HOME} element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path={ROUTER_PATHS.BLOG} element={<BlogPage />} />
			<Route path={ROUTER_PATHS.BLOG_DETAIL} element={<BlogDetailPage />} />
			<Route path={ROUTER_PATHS.ABOUT} element={<AboutPage />} />
			<Route path={ROUTER_PATHS.NOT_FOUND} element={<NotFoundPage />} />
		</Route>
	)
);

export function RouterProviderApp() {
	return <RouterProvider router={router} />;
}
