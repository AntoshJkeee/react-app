import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATHS } from './shared/constants/routes';
import { AboutPage, BlogPage, HomePage, NotFoundPage } from './pages';

export default function App() {
	return (
		<>
			<Routes>
				<Route path={ROUTER_PATHS.HOME} element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path={ROUTER_PATHS.BLOG} element={<BlogPage />} />
					<Route path={ROUTER_PATHS.ABOUT} element={<AboutPage />} />
					<Route path={ROUTER_PATHS.NOT_FOUND} element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}
