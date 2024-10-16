import { WidgetsExample } from './widgets';
import { Button, Col, Container, Row } from './shared/ui';
import { FeaturesExample } from './features';
import { EntitiesExample } from './entities';

export default function App() {
	return (
		<div className='app'>
			<header className='App-header'>some header</header>
			<main>
				<Container>
					<Row>
						<Col>
							<EntitiesExample data={{ text: 'Entities example' }}/>
							<FeaturesExample data={{text: 'Feature example'}} />
							<WidgetsExample data={{ text: 'Widget example' }}/>
						</Col>
					</Row>
					<Row>
						<Col cn={{ cols: 'col-4' }}>
							<Button data={{text: 'Кнопка 1'}} />
						</Col>
						<Col cn={{ cols: 'col-4' }}>
							<Button data={{text: 'Кнопка 2'}} />
						</Col>
						<Col cn={{ cols: 'col-4' }}>
							<Button data={{text: 'Кнопка 3'}} />
						</Col>
					</Row>
				</Container>
			</main>
			<footer>some footer</footer>
		</div>
	);
}
