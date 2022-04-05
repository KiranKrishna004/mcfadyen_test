/** @format */
import { useDispatch, useSelector } from "react-redux";

const SizeBtn = () => {
	const dispatch = useDispatch();
	const size = useSelector((state) => state.size);
	const sizes = ["XS", "S", "M", "L", "XXL"];
	const handleClick = (e) => {
		e.preventDefault();
		dispatch({ type: e.target.value });
	};
	let buttonStyles = {};
	return (
		<div className='flex md:flex-wrap xs:justify-center mt-1'>
			{sizes.map((item, index) => {
				//Ternary operation to choose the Button Style
				item === size
					? (buttonStyles = {
							backgroundColor: "black",
							height: "30px",
							width: "78px",
					  })
					: (buttonStyles = {
							backgroundColor: "white",
							color: "black",
							height: "30px",
							width: "78px",
					  });
				return (
					<div className='m-1' key={index}>
						<button
							onClick={handleClick}
							value={item}
							style={buttonStyles}
							className='rounded-full text-white border border-1'>
							{item}
						</button>
					</div>
				);
			})}
		</div>
	);
};
export default SizeBtn;
