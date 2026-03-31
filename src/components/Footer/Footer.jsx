import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#09001F] text-white py-[80px]">
      <div className="container mx-auto px-4">
        {/* responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Subscribe */}
          <div className="space-y-3">
            <img className="w-2/3 py-1" src="/images/logo.webp" alt="logo" />

            <p className="font-medium text-[18px] leading-[140%]">Subscribe</p>

            <p className="text-[14px]">Get 10% off your first order</p>

            <form className="relative">
              <input
                className="w-full py-2 px-3 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
              />

              <span className="absolute right-3 top-1/2 -translate-y-1/2 p-2 cursor-pointer">
                <FiSend />
              </span>
            </form>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium text-lg py-4">Support</h3>

            <address className="text-[14px] not-italic">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </address>

            <p className="text-[14px] mt-2">support@example.com</p>

            <a href="tel: +880123456789" className="text-[14px] mt-2 block">
              +880 123456789
            </a>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-medium text-lg py-4">Account</h3>

            <ul className="space-y-2">
              <li>
                <Link className="text-[14px]" to="/">
                  My Account
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  Checkout
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  Order Tracking
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-medium text-lg py-4">Quick Link</h3>

            <ul className="space-y-2">
              <li>
                <Link className="text-[14px]" to="/">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  Terms Of Use
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  FAQ
                </Link>
              </li>

              <li>
                <Link className="text-[14px]" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-3">
            <p className="font-medium text-[18px] leading-[140%]">
              Download App
            </p>

            <p className="text-[14px]">Get the latest updates and offers</p>

            <img src="/images/app.png" alt="app-logo" />

            <ul className="flex items-center gap-5 mt-5 text-[20px]">
              <li>
                <Link to="/">
                  <FaFacebookF />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <RiTwitterLine />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { FiSend } from "react-icons/fi";
// import { Link } from "react-router";
// import { FaFacebookF } from "react-icons/fa";
// import { RiTwitterLine } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-[#09001F]  text-white py-[80px]">
//       <div className="container flex flex-col items-center gap-5">
//         <div className="lg:grid grid-cols-5 gap-5">
//           <div className="lg:col-span-1 space-y-3 ">
//             <img className="w-2/3 py-1" src="/images/logo.webp" alt="logo" />
//             <p className="font-medium text-[18px] leading-[140%] ">Subscribe</p>
//             <p className="font-normal text-[14px]">
//               Get 10% off your first order
//             </p>
//             <form action="" className="relative">
//               <input
//                 className=" py-2 px-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 type="email"
//                 placeholder="Enter your email"
//               />
//               <span className="absolute right-15 top-1/2 transform -translate-y-1/2  p-2 ">
//                 <FiSend />
//               </span>
//             </form>
//           </div>

//           <div className="lg:col-span-1 space-y-3 ">
//             <h3 className="font-medium text-lg leading-[120%] py-5 ">
//               Support
//             </h3>
//             <address className="font-normal text-[14px]">
//               111 Bijoy sarani, Dhaka,
//               <br /> DH 1515, Bangladesh.
//             </address>
//             <p className="font-normal text-[14px]">support@example.com</p>
//             <a href="tel:+880123456789" className="font-normal text-[14px]">
//               +880 123456789
//             </a>
//           </div>
//           <div className="lg:col-span-1 space-y-3 ">
//             <h3 className="font-medium text-lg leading-[120%] py-4 ">
//               Account
//             </h3>
//             <ul>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   My Account
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Checkout
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Order Tracking
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Help & Support
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="lg:col-span-1 space-y-3 ">
//             <h3 className="font-medium text-lg leading-[120%] py-4 ">
//               Quick Link
//             </h3>
//             <ul>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Terms Of Use
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link className="font-normal text-[14px]" to="/">
//                   {" "}
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="lg:col-span-1 space-y-3 ">
//             <img className="w-2/3" src="/images/logo.webp" alt="logo" />
//             <p className="font-medium text-[20px] leading-[140%] ">Subscribe</p>
//             <p className="font-normal text-[16px]">
//               Get 10% off your first order
//             </p>
//             <form action="" className="relative">
//               <input
//                 className="w-full py-2 px-4 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 type="email"
//                 placeholder="Enter your email"
//               />
//               <span className="absolute right-0 top-1/2 transform -translate-y-1/2  p-2 ">
//                 <FiSend />
//               </span>
//             </form>
//           </div>
//         </div>

//         <div className="grid grid-cols-5 gap-10">
//           <div className="col-span-1 space-y-3 ">
//             <img className="w-2/3 py-1" src="/images/logo.webp" alt="logo" />
//             <p className="font-medium text-[18px] leading-[140%] ">Subscribe</p>
//             <p className="font-normal text-[14px]">
//               Get 10% off your first order
//             </p>
//             <form action="" className="relative">
//               <input
//                 className=" py-2 px-2 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 type="email"
//                 placeholder="Enter your email"
//               />
//               <span className="absolute right-15 top-1/2 transform -translate-y-1/2  p-2 ">
//                 <FiSend />
//               </span>
//             </form>
//           </div>
//           <div className="grid grid-cols-3 gap-5 col-span-3 space-y-3">
//             <div className="col-span-1">
//               <h3 className="font-medium text-lg leading-[120%] py-5 ">
//                 Support
//               </h3>
//               <address className="font-normal text-[14px]">
//                 111 Bijoy sarani, Dhaka,
//                 <br /> DH 1515, Bangladesh.
//               </address>
//               <p className="font-normal text-[14px]">support@example.com</p>
//               <a href="tel:+880123456789" className="font-normal text-[14px]">
//                 +880 123456789
//               </a>
//             </div>
//             <div className="col-span-1">
//               {" "}
//               <h3 className="font-medium text-lg leading-[120%] py-4 ">
//                 Account
//               </h3>
//               <ul>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     My Account
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Checkout
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Order Tracking
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Help & Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-span-1">
//               {" "}
//               <h3 className="font-medium text-lg leading-[120%] py-4 ">
//                 Quick Link
//               </h3>
//               <ul>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Terms Of Use
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="font-normal text-[14px]" to="/">
//                     {" "}
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="col-span-1 space-y-3">
//             <p className="font-medium text-[18px] leading-[140%] ">
//               Download App
//             </p>
//             <p className="font-normal text-[14px]">
//               Get the latest updates and offers
//             </p>
//             <img src="images/app.png" alt="app-logo" />

//             <ul className="flex items-center gap-5 mt-5 text-[20px]">
//               <li>
//                 <Link to="/">
//                   <FaFacebookF />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/">
//                   <RiTwitterLine />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/">
//                   <FaInstagram />
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/">
//                   <FaLinkedinIn />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
