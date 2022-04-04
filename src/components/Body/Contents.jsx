/** @format */
import BuySection from "./BuySection";
import Details from "./Details";
import ImageLayout from "./ImageLayout";
const Content = () => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<Details />
			<ImageLayout />
			<BuySection />
		</div>
	);
};
export default Content;
