import Logo from "./Logo"
import Pills from "./Pills"

function Navbar() {
    return (
        <nav className="bg-white border-b border-border py-4 px-10 sticky top-0 z-10 flex justify-between items-center ">
            <Logo />
            <div className="text-xs text-[#555] gap-5 md:flex items-center hidden ">
                <a href="#menu" className="hover:text-primary">Menu</a>
                <a href="#whyUs" className="hover:text-primary">Our Story</a>
                <a href="#gallery" className="hover:text-primary">Gallery</a>
                <a href="#contact" className="hover:text-primary">Find Us</a>
            </div>
            <a href="#contact"><Pills title='Reserve Now' pillStyle='bg-black text-white text-xs cursor-pointer' /></a>
        </nav>
    )
}

export default Navbar