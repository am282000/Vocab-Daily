import './App.css';
import { Vocab } from './vocabList';

function App() {
	const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));
	return (
		<div className="App">
			<h1>📚 Welcome to the Vocab Daily 📚</h1>
			<h2>Word: {Vocab[randomNum].FIELD1}</h2>
			<h3>Meaning : {Vocab[randomNum].FIELD2}</h3>
			<img className="logo" src="/hand.gif" alt="loading..." />
			<p>
				Made with ❤️ by
				<a className="link" href="https://ashishmadan.netlify.app">
					{` Ashish Madaan.`}
				</a>
			</p>
		</div>
	);
}

export default App;
