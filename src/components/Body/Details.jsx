/** @format */

//Left Grid
const Details = () => {
	const headerContent = ["DETAILS", "DELIVERY", "FIT", "SHARE"];
	return (
		<div className='flex sticky top-14 pl-5 pr-7 justify-start w-full flex-col'>
			<div className='flex justify-start '>
				{headerContent.map((item, index) => {
					return item === "DETAILS" ? (
						<ul className='list-none' key={index}>
							<button className='pr-2'>
								<strong>{item}</strong>
							</button>
						</ul>
					) : (
						<ul className='list-none' key={index}>
							<button className='pr-2'>{item}</button>
						</ul>
					);
				})}
			</div>
			<div className='mt-2 text-sm'>
				<p>
					The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
					lavishness by night and by day: a blazer in a linen blend shot with
					lurex for a shimmering surface that shines like a star in the sky. it
					has a straight fit with well defined shoulders and a shawl collar
					culminating in a button and has been flawlessly finished with three
					jet pockets with a sartorial feel.{" "}
				</p>
				<p className='mt-7'>See the EDITOR’S NOTE </p>
				<p className='mt-4'>Learn about the DESIGNER</p>
			</div>
		</div>
	);
};

export default Details;
