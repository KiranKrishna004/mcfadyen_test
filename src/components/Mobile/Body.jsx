/** @format */

import BuySection from "../Body/BuySection";
import Footer from "../Body/Footer";
import Tag from "../Body/Tag";
import ImageCarousel from "./ImageCarousel";
const Body = () => {
	return (
		<div className='w-full'>
			<ImageCarousel />
			<BuySection />
			<Tag />
			<div className='my-14 mx-3'>
				<Footer />
			</div>
		</div>
	);
};
export default Body;
