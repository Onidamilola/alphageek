import React from 'react';
import alpha from '../assets/images/alpha.png';
import Open from '../assets/images/open.png';

const Welcome = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center', 
            padding: '20px', 
            marginTop: '100px',
            minHeight: '100vh', 
            backgroundImage: `url(${Open})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            '@media only screen and (max-width: 600px)': {
                padding: '10px',
                marginTop: '50px'
            }
        }}>
            <img src={alpha} alt="alpha" style={{ margin: '0 auto 10px', display: 'block', maxWidth: '100%' }} />
        </div>
    );
}

export default Welcome;
