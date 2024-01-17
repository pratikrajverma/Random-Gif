import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import useGif from '../hooks/useGif';
 
 

const Tag = () => {

    const [search, setsearch] = useState('');
 
    const{gif, loader, fetchDATA} = useGif(search)

   

    function clickhandler() {
        fetchDATA();

    }




    const changehandler = (event) => {
        setsearch(event.target.value);
    }


    return (
        <div className='w-3/5 rounded-lg flex flex-col gap-5 items-center h-fit p-6 bg-sky-500'>
            <h1 className='rounded-sm    text-2xl font-semibold   '>Random {search} Gif <hr></hr></h1>

            <div className='border-[1px] border-black w-[20rem] h-[15rem]'>
                {
                    loader === true ? (

                        <PropagateLoader
                            className='w-30 pt-20  text-center' color='#ede800' />)
                        : (<img className='w-[100%] h-[100%]' src={gif} />)

                }
            </div>

            <input
                type='text'
                className='w-[40%] rounded-lg px-2 py-1'
                placeholder="Type your GIF"
                onChange={changehandler}
                value={search}
            />


            <button onClick={clickhandler}
                className='w-[70%] bg-lime-200 rounded-lg py-1 font-semibold'>
                Generate Gif
            </button>
        </div>
    )
}

export default Tag