/** @format */

import buyLeft from "../../assets/buyLeft.jpg";
import buyRight from "../../assets/buyRight.jpg";
import right from "../../assets/right.jpg";
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
		<div className='xs:m-5 md:m-14 text-sm static'>
			<h1 className='xs:text-3xl md:text-5xl'>
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
				<button className=' flex justify-center items-center rounded-full bg-black text-white w-full h-10'>
					ADD TO BAG &nbsp;
					{
						<svg
							width='18'
							height='20'
							viewBox='0 0 18 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_1503_14824)'>
								<path
									d='M12.9146 1C12.9146 3.40741 16.1398 5.50617 16.8671 5.93827C16.9304 5.96914 16.9304 6.03086 16.8671 6.06173C16.1398 6.49383 12.9146 8.59259 12.9146 11'
									stroke='white'
									strokeLinecap='round'
								/>
								<line
									x1='1.41455'
									y1='6'
									x2='16.4146'
									y2='6'
									stroke='white'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1503_14824'>
									<rect
										width='17'
										height='12'
										fill='white'
										transform='translate(0.914551)'
									/>
								</clipPath>
							</defs>
						</svg>
					}
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
