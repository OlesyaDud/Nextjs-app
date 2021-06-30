import React from 'react';
import headerStyles from '../styles/Header.module.css';
import Link from 'next/link';


 const Header = () => {
     const x = 4
    return (
        <div>
            {/* <h1 className='title'> */}
            <h1 className={headerStyles.title}>
                <span>Developers Blog</span>News
            </h1>
            <p className={headerStyles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</p>
            {/* example of styling inside component */}
            {/* <style jsx>
                {
                    `
                    .title {
                        color: ${x>3 ? 'pink' : 'orange'};
                    }`
                }
            </style> */}
        </div>
    )
}
export default Header;