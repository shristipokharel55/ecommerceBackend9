import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../store/themeSlice'

const Home = () => {
    const theme = useSelector((state)=>state.theme)

    // dispatch(changeTheme())
    console.log(theme);

    const handleChange  = ()=>{
        dispatch(changeTheme())
    }

    const dispatch = useDispatch()
  return (
    <div className={`${theme? 'bg-red-200 text-black' : 'bg-black text-white'} h-[100vh]`}>Home
        <h1 >HEllo WOrld</h1>

        <button onClick={handleChange}>Change Theme</button>
    </div>
  )
}

export default Home