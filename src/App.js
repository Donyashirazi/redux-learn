import { useSelector, useDispatch } from 'react-redux/es/exports';
// import * as actions from './actions';
import { increment, decrement } from './actions';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h2>Counter: {counter}</h2>
			<button
				onClick={() => {
					dispatch(increment(5));
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				-
			</button>
			{isLogged ? <h2>valuable information</h2> : ''}
		</div>
	);
}

export default App;
