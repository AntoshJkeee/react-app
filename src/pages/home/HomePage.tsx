import './HomePage.scss';
import { WidgetsExample } from '../../widgets';

export function HomePage() {
	return (
		<>
			<h1 className={'some'}>Home Page</h1>
			<WidgetsExample data={{ text: 'Widgets Example' }} />
		</>
	);
}
