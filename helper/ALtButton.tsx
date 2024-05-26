import React from 'react'
const ALtButton = ({ title, href }: any) => {
    const handleClick = () => {
        window.location.href = href;
    };
    return (
        <div className='flex-center lg:w-full xs:w-fit'>
            <button type="button" className="alt-button flex-center" onClick={handleClick}>
                {title}
            </button>
        </div>

    )
}

export default ALtButton
