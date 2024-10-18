import './Header.scss';
import classes from './Header.cn';
import { NavLink } from 'react-router-dom';
import { ROUTER_PATHS } from '../../shared/constants/routes';

export function Header() {
	const styles = classes();

	return (
		<>
			<header className={styles.block}>
				<NavLink className={styles.elementLink} to={ROUTER_PATHS.HOME}>
					HOME
				</NavLink>
				<NavLink className={styles.elementLink} to={ROUTER_PATHS.BLOG}>
					BLOG
				</NavLink>
				<NavLink className={styles.elementLink} to={ROUTER_PATHS.ABOUT}>
					ABOUT
				</NavLink>
			</header>
		</>
	);
}
