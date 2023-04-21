import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
          >
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">
              tails<span className="text-indigo-600">.</span>
            </span>
          </a>

          <div className="relative flex flex-col md:flex-row">
            {/* <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              <Link
                href="/"
                className="mr-6 font-medium leading-6 text-gray-600
                hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="mr-6 font-medium leading-6 text-gray-600
                hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="mr-6 font-medium leading-6 text-gray-600
                hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="font-medium leading-6 text-gray-600 md:mr-6
                hover:text-gray-900"
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="font-medium leading-6 text-gray-600 md:mr-6
                hover:text-gray-900"
              >
                Blog
              </Link>
            </nav> */}
            <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
              <Link
                href="/sign-in"
                className="text-base font-medium leading-6 text-gray-600
                whitespace-no-wrap transition duration-150 ease-in-out
                hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="text-base font-medium leading-6 text-gray-600
                whitespace-no-wrap transition duration-150 ease-in-out
                hover:text-gray-900"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
