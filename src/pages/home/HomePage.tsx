import './HomePage.scss';
import { WidgetsExample } from '../../widgets';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function HomePage() {
	const name = useSelector((state: RootState) => state.user);

	return (
		<>
			<h1 className={'some'}>Home Page</h1>
			<WidgetsExample data={{ text: 'Widgets Example' }} />
			<div style={{ margin: '0 auto', width: '500px', marginBottom: '30px' }}>
				<h2>Store: {name.firstName}</h2>
			</div>
		</>
	);
}
