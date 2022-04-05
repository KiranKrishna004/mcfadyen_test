/** @format */
import bag from "../../assets/bag.jpg";
import search from "../../assets/search.jpg";
import nav from "../../assets/nav.jpg";

//Mobile NavBar
const MNav = () => {
	return (
		<div className='sticky top-0 bg-white flex justify-between py-5 px-4 md:hidden'>
			<div>MY COMPANY.COM</div>
			<button className='flex justify-center'>
				<img src={search} className='px-2' alt='img missing' />
				<img src={bag} className='px-2' alt='img missing' />
				<img src={nav} className='px-2' alt='img missing' />
			</button>
		</div>
	);
};
export default MNav;
