import React, { useState, useEffect } from "react";
import bgcard from '../../../assets/bgbatik.png';
const CardContent = ({ children }) => {
    return (
        <>
            <div className="bg-white w-full h-full shadow-md p-4 mt-3 rounded-md sm:p-1 md:p-1 lg:p-2 xl:p-4">
                {children}
            </div>
        </>
    );
}

export default CardContent;
// const CardContent = ({ children }) => {
//     return (
//         <div
//             style={{
//                 backgroundImage: `url(${bgcard})`, // Use the imported image
//                 backgroundSize: 'cover', // or 'contain' depending on your needs
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 width: '100%',
//                 height: '100%',
//                 padding: '16px', // Adjust padding as needed
//                 borderRadius: '8px', // Optional: to match the rounded corners
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: shadow effect
//             }}
//             className="mt-3"
//         >
//             {children}
//         </div>
//     );
// }

// export default CardContent;