import React, { useRef } from "react";
import './WorkExperience.css';
import { WORK_EXPERIRNCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from 'react-slick';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
const WorkExperience = () => {

    const sliderRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive :[
            {
               breakpoint: 760,
               settings : {
                slidesToShow:1,
                slidesToScroll:1,
               },
            },
        ],
      };
      const slideRight = ()=>{
        sliderRef.current.slickNext();
      }
      const slideLeft = ()=>{
        sliderRef.current.slickPrev();
      }
    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
    
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <ChevronRightOutlinedIcon />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <ChevronLeftOutlinedIcon />
                </div>
                <Slider ref= {sliderRef} {...settings}>
                {WORK_EXPERIRNCE.map((item)=>(
                    <ExperienceCard key={item.title} details={item} />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience;