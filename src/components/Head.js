import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {

        getSearchSuggestions();
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
    };

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
                onClick={() => toggleMenuHandler()}
                className='h-8 cursor-pointer' 
                alt='menu'
                src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
            />
            <a href=''/>
            <img 
                className="h-8 mx-3" 
                alt='logo'
                src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
            />
            <a href=''/>
        </div>
        <div className='col-span-10'>
            <input 
                className='w-1/2 border border-gray-400 px-5 py-2 rounded-l-full' 
                type='text' 
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button 
                className='border border-gray-400 px-5 py-2 bg-grey-100 rounded-r-full'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img 
                className='h-8' 
                alt='user Icon'
                src='data:image/png;base64,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'
            />
        </div>
    </div>
  )
}

export default Head