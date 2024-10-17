import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../shared/constants/routes';

export function NotFoundPage() {
	return (
		<div>
			<h2>Page NotFoundPage</h2>
			<Link to={ROUTER_PATHS.HOME} />
		</div>
	);
}
