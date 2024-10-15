import About from './components/About/About';
import MyComponent from './components/MyComponent/MyComponent';

export default function App() {
	return (
		<div className="app">
			<header className="App-header">some header</header>
			<main>
				<div>some text</div>
			</main>
			<About name={'s'} />
			<MyComponent />
			<footer>some footer</footer>
		</div>
	);
}
