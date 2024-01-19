import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="flex justify-between px-20 py-10 bg-yellow-100">
            <div class="navigation">
                <Link href="/" className="block px-6 py-4 bg-yellow-300 text-white text-xl  rounded-md hover:bg-orange-400 transition duration-300 ease-in-out" >Home</Link>
            </div>
            <div>
                <Link href="/about" className="block px-6 py-4 bg-yellow-300 text-white text-xl  rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">About us</Link>
            </div>
            <div>
                <Link href="/private" className="block px-6 py-4 bg-yellow-300 text-white text-xl rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">Private practice</Link>
            </div>
            <div>
                <Link href="/group" className="block px-6 py-4 bg-yellow-300 text-white text-xl rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">Group practice</Link>
            </div>
            <div>
                <Link href="/shop" className="block px-6 py-4 bg-yellow-300 text-white text-xl  rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">Choose your Sadhu board</Link>
            </div>
            <div>
                <Link href="/contact" className="block px-6 py-4 bg-yellow-300 text-white text-xl  rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">Contact</Link>
            </div>
        </nav>
    );
  }
  