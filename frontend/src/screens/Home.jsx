// import { FaceFrownIcon } from "@heroicons/react/24/outline";
// import { format } from "date-fns";

// import { useState } from "react";
// import Drawer from "../components/Drawer";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import InfoCard from "../components/InfoCard";
// import MapCard from "../components/MapCard";
// import getHotelList from "../utils/getHotelList";

// const Home = ({ searchResults }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedCity, setSelectedCity] = useState(null);

//   return (
//     <div>
//       <Header
//         searchInput={searchInput}
//         setSearchInput={setSearchInput}
//         selectedCity={selectedCity}
//         setSelectedCity={setSelectedCity}
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//       />
//       <main
//         className={`flex ${!searchResults && "flex-col max-w-4xl mx-auto"}`}
//       >
//         {/* Left Section */}
//         <section className="flex-grow pt-14 px-6">
//           <p className="text-xs">
//             {searchResults
//               ? `Accommodations available ${range}, ${numOfGuests} guests`
//               : `No accommodations available ${range}, ${numOfGuests} guests`}
//           </p>
//           <h1 className="text-3xl font-semibold mt-2 mb-6">
//             Stays in {location}
//           </h1>

//           {searchResults && (
//             <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
//               <p className="button">Cancellation Flexibility</p>
//               <p className="button">Price</p>
//               <p className="button">Rooms and Beds</p>
//               <p className="button">More filters</p>
//             </div>
//           )}
//           <div className="flex flex-col">
//             {/* Map Available Hotels */}
//             {searchResults &&
//               searchResults?.map((item) => (
//                 <InfoCard
//                   key={item.img}
//                   cityId={id}
//                   item={item}
//                   startDate={startDate}
//                   endDate={endDate}
//                   numOfGuests={numOfGuests}
//                 />
//               ))}
//           </div>
//         </section>
//         {/* MapBox, Right Section */}
//         {searchResults ? (
//           <section className="hidden lg:inline-flex xl:min-w-[600px]">
//             <div className="sticky top-[68px] w-full h-screen">
//               <MapCard searchResults={searchResults} />
//             </div>
//           </section>
//         ) : (
//           <div className="font-semilight max-w-sm mb-[155px] mx-auto text-center">
//             <FaceFrownIcon className="mx-auto max-w-[300px]" />
//             <p>
//               {`Sorry, there are no accommodations available in ${location} ${range}. Please, try again on different dates.`}
//             </p>
//           </div>
//         )}
//       </main>
//       <Footer />
//       {/* Drawer Menu, hided by default */}
//       <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
//         <p className="drawer-item">
//           <a href={"/favorites"}>List of Favorites</a>
//         </p>
//         <p className="drawer-item">
//           <a href={"/bookings"}>Your Bookings</a>
//         </p>
//         <p
//           onClick={() => {
//             console.log("Sign out");
//           }}
//           className="drawer-item"
//         >
//           Sign out
//         </p>
//       </Drawer>
//     </div>
//   );
// };

// export default Home;
