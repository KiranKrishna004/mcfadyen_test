/** @format */
import Svg from "./Svg";

const AddToBag = () => {
	return (
		<div className='flex justify-center mt-4'>
			<button className=' flex justify-center items-center rounded-full bg-black text-white w-full h-10'>
				ADD TO BAG &nbsp;
				{
					//Arrow SVG is added here
					<Svg />
				}
			</button>
		</div>
	);
};
export default AddToBag;
