/** @format */

import buyLeft from "../../assets/buyLeft.jpg";
import buyRight from "../../assets/buyRight.jpg";
import SizeBtn from "./SizeBtn";
import AddToBag from "./AddToBag";

//Right Grid
const BuySection = () => {
	return (
		<div className='xs:p-5 md:p-14 text-sm md:sticky md:top-14'>
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
				<img
					src={buyLeft}
					className='mr-1 border border-1 border-black'
					alt='img missing'
				/>
				<img
					src={buyRight}
					className='border border-2 border-gray-200'
					alt='img missing'
				/>
			</div>
			<div className='flex justify-between mt-3'>
				<p>
					<strong>SIZE</strong> L
				</p>
				<p className='underline underline-offset-0'>SIZE GUIDE</p>
			</div>
			<SizeBtn />
			<AddToBag />
			<p className='mt-6'>
				Get 4 interest-free payments of $196.25 with Klarna <p> LEARN MORE</p>
			</p>
			<p className='mt-4'>Speak to a Personal Stylist CHAT NOW</p>
		</div>
	);
};
export default BuySection;
