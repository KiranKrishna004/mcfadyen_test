/** @format */
import Body from "../Mobile/Body";
import BuySection from "./BuySection";
import Details from "./Details";
import ImageLayout from "./ImageLayout";

//3 column grid is implemented
const Content = () => {
	return (
		<div>
			<div className='xs:hidden md:grid grid-cols-3 gap-4'>
				<div className='static'>
					<Details />
				</div>
				<ImageLayout />
				<div className='static'>
					<BuySection />
				</div>
			</div>
			<div className='md:hidden'>
				<Body />
			</div>
		</div>
	);
};
export default Content;
