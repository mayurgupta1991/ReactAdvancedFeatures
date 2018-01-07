import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import NextArrow from './nextArrow';
import PrevArrow from './prevArrow';

const MainSlider = (props) => {
    const { sliderConfig, slidesToShow, speed, slidesToScroll } = props;
    const settings = {
        speed,
        slidesToShow,
        slidesToScroll,
        draggable: false,
        arrows: true,
        infinite: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
      <div>
        {
          <Slider {...settings}>
            {
              sliderConfig.length && sliderConfig.map((slideMain, i) => (
                <div
                  key={`${slideMain.img}_${i}`}
                >
                  <figure className={'sliderImg'}>
                    <img src={slideMain.img} alt="" />
                  </figure>
                  <div className={'sliderContent'}>
                    {slideMain.title}
                  </div>
                  <div className={'sliderContent'}>
                    {slideMain.description}
                  </div>
                </div>
              ))
            }
          </Slider>
        }
      </div>
    );
}

MainSlider.defaultProps = {
    sliderConfig: [],
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
};

MainSlider.propTypes = {
    sliderConfig: PropTypes.array,
    slidesToShow: PropTypes.number,
    slideCount: PropTypes.number,
    speed: PropTypes.number,
};

export default MainSlider;
