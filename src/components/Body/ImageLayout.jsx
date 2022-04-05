/** @format */
import imgTop from "../../assets/imgTop.jpg";
import imgRight from "../../assets/imgRight.jpg";
import imgLeft from "../../assets/imgLeft.jpg";
import imgMid from "../../assets/imgMid.jpg";
import imgBot from "../../assets/imgBot.jpg";
import heart from "../../assets/heart.jpg";
import Footer from "./Footer";
import Tag from "./Tag";

//Middle Grid
const ImageLayout = () => {
	return (
		<div>
			<div className='relative'>
				<img src={imgTop} alt='top missing' className='relative' />
				<img
					src={heart}
					className='absolute top-4 right-5'
					alt='heart missing'
				/>
			</div>
			<div className='grid grid-cols-2 pt-1'>
				<img src={imgLeft} alt='left missing' />
				<img src={imgRight} alt='right missing' />
			</div>
			<img src={imgMid} alt='mid missing' className='pt-1' />
			<img src={imgBot} alt='bot missing' className='pt-1' />
			<Tag />
			<Footer />
		</div>
	);
};

export default ImageLayout;
