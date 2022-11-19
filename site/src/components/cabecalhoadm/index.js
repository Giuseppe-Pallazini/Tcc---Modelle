import './index.scss'
import Imagem1 from '../../assets/image/img-user.png'
import Imagem2 from '../../assets/image/img-exit.png'
import { Link, useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
 

export default function Index(){

    const navigate = useNavigate();

    function sair(){
        storage.remove('admin-logado')
        toast.dark("Admin deslogado com sucesso")
        navigate('/')
    }

    useEffect(() => {
        if (!storage('admin-logado')) {
            navigate('/login')
        }
    },[])

    return(
        <header>
            <nav className='cab'>
                <div className='cab-admin'>
                <div className='cab-div-exit'>
                    <Link className='cab-exit' to='/admin/home'>
                        <img className='cab-admin-img' src={Imagem1} alt=""/>
                    </Link>
                    <span className='cab-admin-user'>Administrador</span>
                </div>
                    
                </div>

                <div onClick={sair} className='cab-exit'>
                         <img className='cab-exit-1' src={Imagem2} alt=''/>
                </div>
            </nav>
        </header>
    )
}