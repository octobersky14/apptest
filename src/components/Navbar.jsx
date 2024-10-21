import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const data = useSelector((state) => state.data.data);
    const dispatch = useDispatch();

    const handleChange = () => {
        console.log('change')
    }

    return (
        <div className={`navbar flex font-poppins text-lg w-full fixed z-50`}>
            <div className="flex w-1/2 p-2 pb-0 items-center">
                <Link
                    to="top"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    duration={900}
                    delay={0}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >
                </Link>
            </div>
            <button
                onMouseDown={() => dispatch()}
                onMouseUp={() => {
                    dispatch();
                    handleChange();
                }}>
                <FontAwesomeIcon icon={faLightbulb} />
            </button>
        </div>
    );
};

export default Navbar;
