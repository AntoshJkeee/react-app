import About from './components/About/About';
import MyComponent from './components/MyComponent/MyComponent';
import SomeComponent from './components/SomeComponent/SomeComponent';

export default function App() {
	return (
		<div className="app">
			<header className="App-header">some header</header>
			<main>
				<div>some text</div>
			</main>
			<About name={'s'} />
			<MyComponent />
			<SomeComponent />
			<footer>some footer</footer>
		</div>
	);
}
