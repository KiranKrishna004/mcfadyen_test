/** @format */

import Slider from "react-touch-drag-slider";
import styles from "./ImageCarousel.css";

//Carousel Block
const SliderBlock = ({ sliderData, current, setCurrent }) => {
	if (!Array.isArray(sliderData) || sliderData.length <= 0) {
		return null;
	}
	return (
		<div className='h-96'>
			<Slider
				onSlideComplete={(i) => {
					setCurrent(i);
				}}
				onSlideStart={(i) => {
					setCurrent(i);
				}}
				activeIndex={0}
				threshHold={100}
				transition={0.5}
				scaleOnDrag={true}>
				{sliderData.map((slide, index) => (
					<div key={index} className={`${styles.image} relative `}>
						<img src={slide} key={index} alt='img missing' />
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
export default SliderBlock;
