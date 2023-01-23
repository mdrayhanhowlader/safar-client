// import React, { useState } from 'react';
// import CardDashboard from './CardDashboard/CardDashboard';
// import Test from './Test';

// const TestRayhan = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const handleOpen = () => {
//         setIsOpen(true)
//     }

//     const handleClose = () => {
//         setIsOpen(false)
//     }
//     return (
//         <div>
//             <div className='w-4/5 mx-auto'>
//                 {/* card */}
//                 <div><Test />
//                     {
//                         isOpen ?
//                             <button onClick={handleClose}>Close</button>
//                             :
//                             <button onClick={handleOpen}>Open</button>
//                     }
//                 </div>
//                 {/* dashboard */}
//                 <div className={isOpen === true ? 'visible' : 'hidden'}>
//                     <CardDashboard />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestRayhan;