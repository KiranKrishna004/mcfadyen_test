/** @format */

import buyLeft from "../../assets/buyLeft.jpg";
import buyRight from "../../assets/buyRight.jpg";
import { useDispatch, useSelector } from "react-redux";
const BuySection = () => {
	const size = useSelector((state) => state.size);
	const dispatch = useDispatch();
	const sizes = ["XS", "S", "M", "L", "XXL"];
	const handleClick = (e) => {
		e.preventDefault();
		dispatch({ type: e.target.value });
	};
	let buttonStyles = {};
	return (
		<div className='m-14 text-sm static'>
			<h1 className='text-5xl'>
				<strong>JONATHAN SIMKHAI</strong>
			</h1>
			<p className='mt-1'>Lurex Linen Viscose Jacket in Conchiglia</p>
			<p className='mt-1'>
				<strong>$225</strong>
			</p>
			<p className='mt-4'>
				<strong>COLOR</strong> CONCHIGLIA
			</p>
			<div className='flex justify-start items-center'>
				<img src={buyLeft} className='mr-1 border border-1 border-black' />
				<img src={buyRight} className='border border-2 border-gray-200' />
			</div>
			<div className='flex justify-between mt-3'>
				<p>
					<strong>SIZE</strong> L
				</p>
				<p className='underline underline-offset-0'>SIZE GUIDE</p>
			</div>
			<div className='flex flex-wrap mt-1'>
				{sizes.map((item, index) => {
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
			<div className='flex justify-center mt-4'>
				<button className='rounded-full bg-black text-white w-full h-10'>
					ADD TO BAG --{" "}
				</button>
			</div>
			<p className='mt-6'>
				Get 4 interest-free payments of $196.25 with Klarna <p> LEARN MORE</p>
			</p>
			<p className='mt-4'>Speak to a Personal Stylist CHAT NOW</p>
		</div>
	);
};
export default BuySection;
