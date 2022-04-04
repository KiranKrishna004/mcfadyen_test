/** @format */
import NavbarContent from "./NavbarContent";
import account from "../../assets/account.jpg";
import bag from "../../assets/bag.jpg";
import search from "../../assets/search.jpg";
const Navbar = () => {
	return (
		<div className='flex w-full top-0 bg-white sticky mx-5 my-5'>
			<div>MY COMPANY.COM</div>
			<div className='flex mx-auto justify-center'>
				{NavbarContent.map((item, index) => {
					return (
						<ul className='list-none sm:mx-1 md:mx-2' key={index}>
							<li>{item}</li>
						</ul>
					);
				})}
			</div>
			<div className='flex justify-center'>
				<button className='flex justify-center'>
					<img src={account} className='mx-1'></img>
					<img src={bag} className='mx-1'></img>
					<img src={search} className='mr-5'></img>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
