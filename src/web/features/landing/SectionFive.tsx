import React from 'react';
import Section from '../../components/Section';
import { useLandingPageContext } from '../../context/LandingPageContext';
import Box from '../../components/Box';
import { TextComponent } from '../../components/Text';
import * as testimonials from '../../data/testimonials.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css";

interface StyleSheet {
    [key: string]: string
}

const styleSheet: StyleSheet = {
    'sectionBackground': 'pb-12 bg-gradient-to-b from-section-five-gradient-1 from-0% via-section-five-gradient-2 via-[percentage:50%_70%] to-section-five-gradient-3 to-100%',
    'headerText': 'text-center font-[Lexend-ExtraBold]',
    'sectionWidthAndPadding': 'py-10 w-full',
    'testimonyBox': 'float-left w-[20%] p-3',
    'testimonialWrapper': 'w-full md:w-[85%] m-auto',
    'testimonialBg': 'p-1 pb-10 px-3 bg-gradient-to-b from-testimonial-gradient-1 to-testimonial-gradient-2',
    "smallFont": 'text-[5px] md:text-[10px]',
    "storyFont": 'text-[7.5px] md:text-[15px]',
    "bigFont": 'text-[8px] md:text-[16px]',
    'listBlock': 'hidden lg:inline-block w-full',
    'oddClass': 'translate-y-12',
    'avatarAndName': 'flex flex-col justify-center',
    'selfAlign': 'self-center',
    'avatarAndNameContainer': 'flex align-middle space-x-2'
};

interface ScreenProps {
    items: Record<string, any>[];
}

const LargeScreen: React.FC<ScreenProps> = ({ items }) => {
    return (
        <ul className={styleSheet.listBlock}>
            {items.map((item, index) => (
                <li className={`${styleSheet.testimonyBox} ${(index + 1) % 2 !== 0 ? styleSheet.oddClass : ""
                    }`} key={index}>
                    <div className={styleSheet.testimonialBg}>
                        <div className={styleSheet.avatarAndNameContainer}>
                            <div className='flex'>
                                <img className={styleSheet.selfAlign} src={item.image} alt='' />
                            </div>
                            <div className={styleSheet.avatarAndName}>

                                <div className={styleSheet.bigFont}>{item.name}</div>
                                <div className={styleSheet.smallFont}>{item.title}</div>

                            </div>
                        </div>
                        <div className='my-5'>
                            <TextComponent className={styleSheet.storyFont}>{item.testimony}</TextComponent>
                        </div>
                        <div>
                            {[...Array(item.totalrating)].map((_, index) => (
                                <div className={`star-icon ${index + 1 <= item.rating ? 'star-icon-black' : ""}`} key={index}></div>
                            ))}

                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

const MobileScreen: React.FC<ScreenProps> = ({ items }) => {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Loop carousel
        speed: 500, // Animation speed in ms
        slidesToShow: 2, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        arrows: false,
        responsive: [
            {
                breakpoint: 468, // Below 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
            {
                breakpoint: 1024, // Below 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
        ],
    };

    return (
        <div className='block lg:hidden'>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <li className={styleSheet.testimonyBox} key={index}>
                        <div className={styleSheet.testimonialBg}>
                            <div className='flex align-middle space-x-2'>
                                <div className='flex'>
                                    <img className='self-center' src={item.image} alt='' />
                                </div>
                                <div className='flex flex-col justify-center'>

                                    <div className={styleSheet.bigFont}>{item.name}</div>
                                    <div className={styleSheet.smallFont}>{item.title}</div>

                                </div>
                            </div>
                            <div className='my-5'>
                                <TextComponent className={styleSheet.storyFont}>{item.testimony}</TextComponent>
                            </div>
                            <div>
                                {[...Array(item.totalrating)].map((_, index) => (
                                    <div className={`star-icon ${index + 1 <= item.rating ? 'star-icon-black' : ""}`} key={index}></div>
                                ))}

                            </div>
                        </div>
                    </li>
                ))}
            </Slider>
        </div>
    )
}

const SectionFive = (): React.JSX.Element => {
    const { h1Size } = useLandingPageContext();
    const items = testimonials.data;
    return (
        <Section parentClassName={styleSheet.sectionBackground}
            childClassName='relative'
        >
            <Box className={styleSheet.sectionWidthAndPadding}>
                <Box className='mb-12'>
                    <Box className='text-center'>
                        <TextComponent className={`${h1Size} ${styleSheet.headerText}`}>Client's Testimonials</TextComponent>
                    </Box>
                </Box>
                <Box className={styleSheet.testimonialWrapper}>
                    <LargeScreen items={items} />
                    <MobileScreen items={items} />
                </Box>
            </Box>
        </Section>
    )
};

export default SectionFive;