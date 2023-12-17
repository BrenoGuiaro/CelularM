import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { IoMdClose as X } from "react-icons/io";
import { FaArrowCircleLeft as Voltar } from "react-icons/fa";
import { FaArrowCircleRight as Next } from "react-icons/fa";
import '../pages/Home.css'
import { NavBarG } from '../components/NavBarG';



const images = [
  'https://lh3.googleusercontent.com/pw/ABLVV847212WmpY42Dvg4V3UOXdhGtbH5LpKXEoPuGjYqhqqAdVaO4AMP1y4FUqOgd4oMhF8L1lZ0jzDWYwVuIBb0fUlguWSvUA5NiIOHBnMPuZetkXcP9lUqc-eD0-HoZH0K3Gt11-oAGhfTfzJZCi2l48=w1366-h615-s-no-gm?authuser=3',
  'https://lh3.googleusercontent.com/pw/ABLVV86d_KjsUG6zu5aKqtcVss4mHo6qA6CC7t1LJkMEmmsf3USt6CUGbQPNKmPxH1VnBpW7EhpgS-o4dG685vg6cLQwzCAgyma4MWNTl1ZMQ1tG-5jI74t0dlou0QR77wBC24y7zTgNWp10PU_FJGhSnPk=w1366-h616-s-no-gm?authuser=3',
  'https://lh3.googleusercontent.com/pw/ABLVV84zkrXd4utZmRTJgA8pQ67Q6pWwqMJAaNQ5HE0SaHpHR9jmpktOg8YBij7LUZo53oU-jxy3ovglpGABTSMP1NTXhK_XAVf24L4GDjzg6m6ifO9BP8nuuqcn6yKnW_OXRLmb4n8Zl1OftKUGIywdJog=w289-h641-s-no-gm?authuser=3',
  'https://lh3.googleusercontent.com/pw/ABLVV87054A5djGVCEF8EZ-sr2zDN5e1LAvY6KnwIxO7pMMWCbcsjJpK5JB_u_sqSH02xlDlg066Z-S39V8YdH6Zyou_Qqldp-F5sWjIUviyEiBLAyKzDeW_JZts14oS8ZGr0UGOn-6LBA6FJp8G8jBjRko=w289-h641-s-no-gm?authuser=3',
  'https://lh3.googleusercontent.com/pw/ABLVV86NwKy2Blot_jlOfUTaqNLAwq4VtCI1BYHv-U1hQE4pBu3-M7rsczKzEowl85gwqvLpAOwiI7_MTrPxd_THZtdIU8UacXvTEStBRYobCitV-ZbOwM_z4YrFcXLBapEjtd-hpkOWXlqsbwijj2NuraU=w289-h641-s-no-gm?authuser=3',
  'https://lh3.googleusercontent.com/pw/ABLVV87aEmcNXKGeFP-khEWTAyKZunsKJdN0s-fdtq90XXs5U5BVSCjUW0XP9ut-mgqEltJyB6D_wXAZ-3ORPd9YGQWvpfk4gvgxnL47B68xm-PcfT2cdmyTvtPhzDOAL0cefQ9r5k8SJhmvOOqRDB_DeIY=w1366-h616-s-no-gm?authuser=3'
]

export const FotosDela = () => {

  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i })
  }

  const imageAction = (action) => {
    let i = data.i
    if (action === 'next') {
      setData({ img: images[i + 1], i: i + 1 })
    }
    if (action === 'back') {
      setData({ img: images[i - 1], i: i - 1 })
    }
    if (!action) {
      setData({ img: '', i: 0 })
    }
  }
  return (
    <>
    <NavBarG/>

      {data.img &&
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <X onClick={() => imageAction()} style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '30px' }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={data.img} style={{ width: '100%', maxWidth: '90%', height: '100%', margin: '0px 0px 0px 13px', borderRadius: '5px' }} alt='' />


            <Voltar onClick={() => imageAction('back')} style={{
              color: 'white',
              fontSize: '40px',
              position: 'absolute',
              top: '85%',
              left: '4%'
            }} />

            <Next onClick={() => imageAction('next')} style={{
              color: 'white',
              fontSize: '40px',
              position: 'absolute',
              top: '85%',
              left: '86%'
            }} />

          </div>
        </div>

      }



      <div style={{ padding: '80px 10px 10px 10px' }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 3, 750: 2, 900: 3 }}
        >
          <Masonry gutter='10px'>
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className='IMG'
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>




    </>
  )
}
