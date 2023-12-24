import React from 'react'
import image1 from './cat1.png'
import image2 from './cat2.png'
import image3 from './cat3.png'
import image4 from './cat4.png'
import image5 from './cat5.png'
import image6 from './cat6.png'
import image7 from './cat7.png'
import image8 from './cat8.png'
import image9 from './cat9.png'
import image10 from './cat10.png'
import image11 from './cat11.png'
const Categories = () => {
    const data = [
        {
            cateImg:image1,
            cateName:"Fashion",
        },
        {
            cateImg:image2,
            cateName:"Electronic",
        },
        {
            cateImg:image3,
            cateName:"Cars",
        },
        {
            cateImg:image4,
            cateName:"Home & Garden",
        },
        {
            cateImg:image5,
            cateName:"Gifts",
        },
        {
            cateImg:image6,
            cateName:"Music",
        },
        {
            cateImg:image7,
            cateName:"Health & Beauty",
        },
        {
            cateImg:image8,
            cateName:"Pets",
        },
        {
            cateImg:image9,
            cateName:"Baby Toys",
        },
        {
            cateImg:image10,
            cateName:"Groceries",
        },
        {
            cateImg:image11,
            cateName:"Books",
        },
    ]
  return (
    <>
      <div className="category">
        {
            data.map((value,index) => {
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
      </div>
    </>
  )
}

export default Categories
