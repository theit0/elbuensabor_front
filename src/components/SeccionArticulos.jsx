import { useSelector } from "react-redux"
import SeccionArticuloRubro from "./SeccionArticuloRubro"

const SeccionArticulos = () => {

    const rubros = useSelector(store => store.rubroReducers.rubros )
    const articulos = useSelector(store=>store.articuloReducers.articulos)

    return (
        <section>
            { 
                rubros && 
                rubros.map(rubro=>{
                    return <SeccionArticuloRubro rubroDenominacion={rubro.denominacion}/>
                })
            }
            {
                articulos.length===0 &&
                <div className="art-notfound">                
                    <span>Por el momento no ofrecemos el producto solicitado.</span>
                </div>
            }
        </section>
    )
}

export default SeccionArticulos