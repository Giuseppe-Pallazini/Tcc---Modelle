import './index.scss'
import '../../assets/common/index.scss'
import ImagemProd from '../../assets/image/ImagemProd.png'
import IconCoracao from '../../assets/image/Coracao-icon.svg'

export default function Index(){

    const [favorito, setFavorito] = useState(CoracaoIcon);

    function favorito( ) {
        const resp = "";
        if (favorito == Coracao2Icon) {
            resp = setFavorito(IconCoracao)
        }
        else if (favorito == IconCoracao) {
            resp = setFavorito(Coracao2Icon);
        }
        return resp;
    }

    function adicionarLista(id) {
        let listaDesejos = [];
        if (storage('lista-desejo')) {
            listaDesejos = storage('lista-desejo')
        }

        if (!listaDesejos.find(item => item.id === id)) {
            listaDesejos.push({
                id: id
            })
            storage('lista-desejo', listaDesejos)
            toast.dark("🛒 Item Adicionado a Lista de Desejo");
        }
    }


    return(
        <main className='main-CardProdutosMenuMasculino'>
            <div className='div-CardProdutosMenuMasculino'>
                <div className='CardProdutosMenuMasculino-div-imgs'>

                    
                    <img onClick={favorito} src={favorito} alt='' className='logo-coração' />
                    <img src={ImagemProd} alt='' className='imagem-produto' />
                </div>
                    <h1>Burberry</h1>
                    <h3>Bermuda de prais xadrez</h3>

                <div className='div-MenuPreco'>R$ <p>1,458,00</p></div>
            </div>
        </main>
    );
}