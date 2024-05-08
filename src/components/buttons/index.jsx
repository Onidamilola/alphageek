import React from 'react'
import styles from './index.module.css';
const TitleButton = ({title,handleSubmit,bgC,visit}) => {

  return (
    <div className={`${bgC ? (visit > 0 ? 'bg-[#008000]': 'bg-[#0000FF]') : 'bg-[#007bff]'} text-white w-full h-[30px] flex justify-center items-center rounded-[8px] mt-[30px] cursor-pointer`} onClick={handleSubmit}>
      {title}
    </div>
  )
}

export default TitleButton
