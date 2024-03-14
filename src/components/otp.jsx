import React from 'react'

const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const isOtpComplete = otp.every((digit) => digit !== '');

    useEffect(() => {
        for (let i = 0; i < otp.length; i++) {
          if (!otp[i]) {
            document.getElementById(`otp-input-${i}`).focus();
            break;
          }
        }
      }, [otp]);
    
      const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && !otp[index]) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
      };

      const handleOtpChange = (index, value) => {
        if (value >= 0 && value <= 9) {
          const newOtpDigits = [...otp];
          newOtpDigits[index] = value;
          setOtp(newOtpDigits);
    
          if (index < newOtpDigits.length - 1 && value !== '') {
            document.getElementById(`otp-input-${index + 1}`).focus();
          }
        }
      };
    
  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
              <p className='text-gray-700 text-lg mb-2'>Your 6-Digit Code</p>
              {otp.map((value, index) => (
                <input
                  key={index}
                  type='tel'
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  min='0'
                  max='9'
                  maxLength='1'
                  required
                  id={`otp-input-${index}`}
                  tabIndex={index + 1}
                  className='border md:bg-bg-green bg-white border-border-primary h-16 w-14 text-center m-2 rounded-lg p-4'
                />
              ))}
            </form>
    </div>
  )
}

export default Otp
