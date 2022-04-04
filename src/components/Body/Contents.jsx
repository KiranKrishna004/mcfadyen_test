/** @format */
import Body from "../Mobile/Body";
import BuySection from "./BuySection";
import Details from "./Details";
import ImageLayout from "./ImageLayout";
const Content = () => {
	return (
		<div>
			<div className='xs:hidden md:grid grid-cols-3 gap-4'>
				<Details />
				<ImageLayout />
				<BuySection />
			</div>
			<div className='md:hidden'>
				<Body />
			</div>
		</div>
	);
};
export default Content;
