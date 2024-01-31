import { ViewSidebar } from '@mui/icons-material';
import React from 'react';
import Sidebar from './sidebar'
import Outlet from '../assets/images/outlet.png'
import Product from '../assets/images/product.png'
import User from '../assets/images/user.png'



const OutletRecruitment = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Grid containing 4 items */}
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px' }}>
        {/* Item 1 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Outlet Visit</h5>
            <p style={{ margin: '0' }}>Planned: 0</p>
            <p style={{ margin: '0' }}>Actual: 0</p>
            <p style={{ margin: '0' }}>Pending: 0</p>
          </div>
        </div>
        {/* Item 2 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Product} alt="product" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Product</h5>
            <p style={{ margin: '0' }}>Total: 62</p>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>POSM Product</h5>
            <p style={{ margin: '0' }}>Total: 0</p>
          </div>
        </div>
        {/* Item 3 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Outlet</h5>
            <p style={{ margin: '0' }}>Total: 887</p>
          </div>
        </div>
        {/* Item 4 */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={User} alt="user" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <div>
            <h5 style={{ margin: '0', marginBottom: '5px' }}>Login</h5>
            <p style={{ margin: '0' }}>Total: 2</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h5>Your Schedule</h5>
        <p>You have 0 store visit Today</p>
      </div>
    </div>
  );
};

export default OutletRecruitment;












// const OutletRecruitment = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
//       {/* Sidebar */}
//       <div>
//        <Sidebar />
//       </div>

//       {/* Grid containing 4 items */}
//       <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px' }}>
//         {/* Item 1 */}
//         <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
//         <img src={Outlet} alt="outlet" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
//           <h4>Outlet Visit</h4>
//           <p>Planned :0</p>
//           <p>Actual :0</p>
//           <p>Pending :0</p>
//         </div>
//         {/* Item 2 */}
//         <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
//         <img src={Product} alt="product" />
//           <h5>Product</h5>
//           <p>Total :62</p>
//           <h4>POSM Product</h4>
//           <p>Total :0</p>
//         </div>
//         {/* Item 3 */}
//         <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
//         <img src={Outlet} alt="outlet" />
//           <h5>Outlet</h5>
//           <p>Total :887</p>
//         </div>
//         {/* Item 4 */}
//         <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
//         <img src={User} alt="user" style={{ display: 'inline-block', justifyContent: 'flex-end' }} />
//           <h5>Login</h5>
//           <p>Total :2</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OutletRecruitment;
