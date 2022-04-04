/** @format */
import Navbar from "./components/Navigation/Navbar";
import "./App.css";
import { createStore } from "redux";
import sizeReducer from "./reducers/sizeReducer";
import { Provider } from "react-redux";
import Content from "./components/Body/Contents";

const sizeStore = createStore(sizeReducer);
const App = () => {
	return (
		<Provider store={sizeStore}>
			<Navbar />
			<Content />
		</Provider>
	);
};

export default App;
