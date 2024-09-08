import React from 'react';

const LinkBox = ({ lbTitle, lbNumber, lbSvg, lbTheme }) => {
    return (
        <div className={`bg-${lbTheme}-100 p-4 rounded-lg shadow-md flex items-center`}>
            <img src={`/svg/${lbSvg}.svg`} alt="" className='w-8 h-8 mr-4' />
            <div>
                <div className='text-lg font-bold'>{lbTitle}</div>
                <div className='text-2xl'>{lbNumber}</div>
            </div>
        </div>
    );
};

export default LinkBox;
