import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { setLogout } from '../state';

const Profile = () => {
  const hiddenFileInput = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [image, setImage] = useState('')
  const user = useSelector((state) => state.user)
  const token = useSelector(state => state.token)

  useEffect(() => {

  }, [image])

  if (!user) {
    return redirect('/login')
  }

  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/login')
  }

  const uploadFileHandler = async (e) => {

    const file = (e.target.files[0])
    const formData = new FormData()
    formData.append('file', file)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      }

      const { data } = await axios.post('http://localhost:5000/api/upload', formData, config)
      setImage(data)
    } catch (error) {
      console.error(error)
    }
  }


  const handleClick = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click()
  }



  return (
    <>
      {user && (
        <div className='auth-form-container'>
          <h2>PROFILE</h2>
          <form className='login-form'>
            <div className='content'>
              <div className='details'>
                <p>{user.fullName}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
              </div>
              <div className='image'>
                <Avatar googleId='118096717852922241760' size='80' round={true} />
                <input type="file" ref={hiddenFileInput} onChange={uploadFileHandler} className='update-button' hidden />
                <button className='update-button' name='file' onClick={handleClick}>Update</button>
              </div>
            </div>

            <button type='submit' onClick={handleLogout}>Logout</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile