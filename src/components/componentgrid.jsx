

import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../assets/images/Frame.png';
import frame1 from '../assets/images/Frame1.png';
import frame7 from '../assets/images/Frame7.png';
import frame3 from '../assets/images/Frame3.png';
import NrjTjl from '../assets/images/NrjTjl.png';
import frame4 from '../assets/images/Frame4.png';
import frame5 from '../assets/images/Frame5.png';
import frame6 from '../assets/images/Frame6.png';
import frame2 from '../assets/images/Frame2.png';

const Component = ({ imageSrc, componentName, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          border: '1px groove #ccc',
          opacity: '1',
          padding: '25px',
          margin: '10px',
          marginTop: '15px',
          textAlign: 'center',
          maxWidth: '150px',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        <img src={imageSrc} alt={`${componentName} Image`} style={{ maxWidth: '100%', maxHeight: '60px' }} />
        <h4 style={{ color: 'black' }}>{componentName}</h4>
      </div>
    </Link>
  );
};

const ComponentGrid = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px 10px' }}>
      {/* Row 1 */}
      <Link to="/outlet-recruitment">
        <Component imageSrc={frame} componentName="Outlet Recruitment" to="/outlet-recruitment" />
      </Link>
      <Link to="/product-merchandising">
        <Component imageSrc={frame1} componentName="Product Merchandising" to="/product-merchandising" />
      </Link>
      <Link to="/product-ordering">
        <Component imageSrc={frame7} componentName="Product Ordering" to="/product-ordering" />
      </Link>
      {/* Row 2 */}
      <Link to="/posm">
        <Component imageSrc={frame3} componentName="POSM" to="/posm" />
      </Link>
      <Link to="/competition-tracking">
        <Component imageSrc={NrjTjl} componentName="Competition Tracking" to="/competition-tracking" />
      </Link>
      <Link to="/products-freshness">
        <Component imageSrc={frame4} componentName="Products Freshness" to="/products-freshness" />
      </Link>
      {/* Row 3 */}
      <Link to="/OOF-tracking">
        <Component imageSrc={frame5} componentName="Out-of-stock-tracking" to="/OOF-tracking" />
      </Link>
      <Link to="/planogram-checks">
        <Component imageSrc={frame6} componentName="Planogram Checks" to="/planogram-checks" />
      </Link>
      <Link to="/pricing-checks">
        <Component imageSrc={frame7} componentName="Pricing Checks" to="/pricing-checks" />
      </Link>
      {/* Row 4 */}
      <Link to="/store-detailing">
        <Component imageSrc={frame2} componentName="Store Detailing" to="/store-detailing" />
      </Link>
    </div>
  );
};

export default ComponentGrid;
