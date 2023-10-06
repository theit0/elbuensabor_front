import { useSelector } from "react-redux"
import SeccionArticuloRubro from "./SeccionArticuloRubro"

const SeccionArticulos = () => {

    const rubros = useSelector(store => store.rubroReducers.rubros )

    return (
        <section>
            { 
                rubros && 
                rubros.map(rubro=>{
                    return <SeccionArticuloRubro rubroDenominacion={rubro.denominacion}/>
                })
            }
        </section>
    )
}

export default SeccionArticulos