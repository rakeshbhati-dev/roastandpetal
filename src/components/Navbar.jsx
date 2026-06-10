import { useState } from "react"
import Logo from "./Logo"
import Pills from "./Pills"
import { Menu, X } from "lucide-react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white border-b border-border sticky top-0 z-10">
            {/* Main Bar */}
            <div className="py-4 px-6 md:px-10 flex justify-between items-center">
                <Logo />

                {/* Desktop Links */}
                <div className="text-xs text-[#555] gap-5 hidden md:flex items-center">
                    <a href="#menu" className="hover:text-primary">Menu</a>
                    <a href="#whyUs" className="hover:text-primary">Our Story</a>
                    <a href="#gallery" className="hover:text-primary">Gallery</a>
                    <a href="#contact" className="hover:text-primary">Find Us</a>
                </div>

                {/* Desktop CTA */}
                <a href="#contact" className="hidden md:block">
                    <Pills title='Reserve Now' pillStyle='bg-black text-white text-xs cursor-pointer' />
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#555]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4 text-sm text-[#555]">
                    <a href="#menu" className="hover:text-primary" onClick={() => setIsOpen(false)}>Menu</a>
                    <a href="#whyUs" className="hover:text-primary" onClick={() => setIsOpen(false)}>Our Story</a>
                    <a href="#gallery" className="hover:text-primary" onClick={() => setIsOpen(false)}>Gallery</a>
                    <a href="#contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>Find Us</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                        <Pills title='Reserve Now' pillStyle='bg-black text-white text-xs cursor-pointer w-full text-center' />
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar