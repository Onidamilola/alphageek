import React from 'react';
import Sidebar1 from './sidebar1';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PDF from '../assets/pdf/help.pdf'



const Help = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <Sidebar1 />
      </div>

      {/* Custom Scrollbar Example */}
      <h2 style={{ textAlign: 'center',
       textDecoration: 'underline',
       padding: '10px',
       marginBottom: '20px' }}>User Manual For Alphageek merchandising Mobile Application</h2>

      {/* Content with custom scrollbar */}
      <div style={{ overflowY: 'scroll', flex: '1', padding: '0 20px' }}>
        <p><strong>Note:</strong> The -webkit-scrollbar is not supported in Firefox or in Edge, prior version 79.</p>
        
      </div>
    </div>
  );
};

export default Help;
