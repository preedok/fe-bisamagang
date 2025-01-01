import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import bgcard from '../../../assets/bgbatik.png'
const Breadcrombss = ({ menu, submenu }) => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const navigate = useNavigate();
    return (
        <div className='bg-[#ffffff] px-5 w-full py-1 rounded-sm' style={{ borderBottomLeftRadius: '18px', borderLeft: '5px solid #0F2167', borderRight: '5px solid #0F2167' }}>
            <h1 className='text-[#0F2167]' style={{ fontWeight: '600', fontSize: '25px' }}>{menu}</h1>
            <div role="presentation" className='my-3' onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <HomeIcon onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }} className='mt-[-3px] text-[#0F2167]'/> 
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        {menu}
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                       {submenu}
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
};

export default Breadcrombss;
// const Breadcrombss = ({ menu, submenu }) => {
//     function handleClick(event) {
//         event.preventDefault();
//         console.info('You clicked a breadcrumb.');
//     }

//     const navigate = useNavigate();

//     return (
//         <div
//             className='relative px-5 w-full py-1 rounded-sm'
//             style={{
//                 borderBottomLeftRadius: '18px',
//                 borderLeft: '5px solid #0F2167',
//                 borderRight: '5px solid #0F2167',
//                 backgroundImage: `url(${bgcard})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//             }}
//         >
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//                     borderRadius: '18px',
//                 }}
//             />
//             <h1 className='text-[#0F2167]' style={{ fontWeight: '600', fontSize: '25px', position: 'relative', zIndex: 1 }}>{menu}</h1>
//             <div role="presentation" className='my-3' onClick={handleClick}>
//                 <Breadcrumbs aria-label="breadcrumb">
//                     <HomeIcon onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }} className='mt-[-3px] text-[#0F2167]' />
//                     <Link
//                         underline="hover"
//                         color="inherit"
//                         href="/material-ui/getting-started/installation/"
//                     >
//                         {menu}
//                     </Link>
//                     <Link
//                         underline="hover"
//                         color="text.primary"
//                         href="/material-ui/react-breadcrumbs/"
//                         aria-current="page"
//                     >
//                         {submenu}
//                     </Link>
//                 </Breadcrumbs>
//             </div>
//         </div>
//     );
// };

// export default Breadcrombss;
