/** @format */
import NavbarContent from "./NavbarContent";
import account from "../../assets/account.jpg";
import bag from "../../assets/bag.jpg";
import search from "../../assets/search.jpg";
import nav from "../../assets/nav.jpg";
const Navbar = () => {
	return (
		<>
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
						<img src={account} className='mx-1'></img>
						<img src={bag} className='mx-1'></img>
						<img src={search} className=''></img>
					</button>
				</div>
			</div>
			<div className='sticky top-0 bg-white flex justify-between py-5 px-4 md:hidden'>
				<div>MY COMPANY.COM</div>
				<div className='flex justify-center'>
					<img src={search} className='px-2' />
					<img src={bag} className='px-2' />
					<img src={nav} className='px-2' />
				</div>
			</div>
		</>
	);
};

export default Navbar;
