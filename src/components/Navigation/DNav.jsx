/** @format */

import account from "../../assets/account.jpg";
import bag from "../../assets/bag.jpg";
import search from "../../assets/search.jpg";
import NavbarContent from "./NavbarContent";

//Desktop NavBar
const DNav = () => {
	return (
		//visibility criteria is added
		<div className='md:flex w-full top-0 bg-white sticky px-5 py-5 xs:hidden'>
			<div>MY COMPANY.COM</div>
			<div className='flex mx-auto justify-center'>
				{NavbarContent.map((item, index) => {
					return (
						<ul className='list-none sm:mx-0 md:mx-2 lg:mx-3' key={index}>
							<button>{item}</button>
						</ul>
					);
				})}
			</div>
			<div className='flex justify-center'>
				<button className='flex justify-center'>
					<img src={account} className='mx-1' alt='img missing' />
					<img src={bag} className='mx-1' alt='img missing' />
					<img src={search} className='mx-1' alt='img missing' />
				</button>
			</div>
		</div>
	);
};
export default DNav;
