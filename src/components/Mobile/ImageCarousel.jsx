/** @format */
import Slider from "react-touch-drag-slider";
import { useState } from "react";
import styles from "./ImageCarousel.css";
import imgTop from "../../assets/imgTop.jpg";
import imgBot from "../../assets/imgBot.jpg";
import imgMid from "../../assets/imgMid.jpg";
import imgRight from "../../assets/imgRight.jpg";
import imgLeft from "../../assets/imgLeft.jpg";
const ImageCarousel = () => {
	const sliderData = [imgTop, imgBot, imgMid, imgRight, imgLeft];
	const [current, setCurrent] = useState(0);
	const length = sliderData.length;
	const nextSlide = () => {
		setCurrent(current === 4 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? 4 : current - 1);
	};
	if (!Array.isArray(sliderData) || sliderData.length <= 0) {
		return null;
	}
	return (
		<div className='h-80'>
			<Slider
				// onSlideComplete={(i) => {
				// 	console.log("finished dragging, current slide is", i);
				// }}
				// onSlideStart={(i) => {
				// 	console.log("started dragging on slide", i);
				// }}
				activeIndex={0}
				threshHold={100}
				transition={0.5}
				scaleOnDrag={true}>
				{sliderData.map((slide, index) => (
					<div key={index} className={`${styles.image} relative `}>
						<img src={slide} key={index} />
						<div
							style={{
								position: "absolute",
								top: "20%",
								right: "20%",
								textAlign: "-webkit-center",
							}}></div>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default ImageCarousel;
