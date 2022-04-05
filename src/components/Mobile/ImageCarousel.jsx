/** @format */

import SliderBlock from "./SliderBlock";

//ImageCarousel
import imgTop from "../../assets/imgTop.jpg";
import imgBot from "../../assets/imgBot.jpg";
import imgMid from "../../assets/imgMid.jpg";
import imgRight from "../../assets/imgRight.jpg";
import imgLeft from "../../assets/imgLeft.jpg";
import { useState } from "react";
import Indicator from "./Indicator";

const ImageCarousel = () => {
	const sliderData = [imgTop, imgBot, imgMid, imgRight, imgLeft];
	const [current, setCurrent] = useState(0);

	return (
		<div id='note'>
			<SliderBlock
				sliderData={sliderData}
				current={current}
				setCurrent={setCurrent}
			/>
			<Indicator sliderData={sliderData} current={current} />
		</div>
	);
};
export default ImageCarousel;
