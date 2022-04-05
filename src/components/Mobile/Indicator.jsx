/** @format */

//Carousel Indicatior
const Indicator = ({ sliderData, current }) => {
	let indicatorStyle = {};

	return (
		<div className='flex mb-2 w-full justify-center'>
			<div className='w-1/2 flex justify-center'>
				{sliderData.map((item, index) => {
					index === current
						? (indicatorStyle = {
								backgroundColor: "black",
								opacity: "60%",
						  })
						: (indicatorStyle = {
								backgroundColor: "black",
								opacity: "10%",
						  });
					return (
						<div
							key={index}
							style={indicatorStyle}
							className='flex justify-center h-0.5 w-4 mx-1'></div>
					);
				})}
			</div>
		</div>
	);
};
export default Indicator;
