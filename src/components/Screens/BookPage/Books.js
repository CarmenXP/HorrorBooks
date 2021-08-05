import{useModal} from "../../Hooks/useModal";
import Modal from "../../Modal";
import "./Books.css";

export default function Books() {
    const[isOpenModal1, openModal1, closeModal1] = useModal(false);
    const[isOpenModal2, openModal2, closeModal2] = useModal(false);
    const[isOpenModal3, openModal3, closeModal3] = useModal(false);
    const[isOpenModal4, openModal4, closeModal4] = useModal(false);
    const[isOpenModal5, openModal5, closeModal5] = useModal(false);
    const[isOpenModal6, openModal6, closeModal6] = useModal(false);
    const[isOpenModal7, openModal7, closeModal7] = useModal(false);
    const[isOpenModal8, openModal8, closeModal8] = useModal(false);
        

    return(
        <>
            <div className="container">
                
                <div className="cardBook">
                    <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-343/el-horror-de-dunwich-a.jpg" alt="dunwich"/>
                    <button className="seeMore" onClick={openModal1}>
                        Ver más
                    </button>
                </div>    
                    <Modal closeModal={closeModal1} isOpen={isOpenModal1}>
                        
                        <h1>El Horror de Dunwich</h1>
                        <h3 >H.P. Lovecraft</h3>
                        <p className="resume">"El horror de Dunwich, obra central de los Mitos de Cthulhu, 
                            Lovecraft nos traslada a un pueblo rural y decadente donde una extraña familia 
                            oculta un secreto aterrador. Acompañan a esta obra El caso de Charles Dexter Ward,
                            El que susurra en la oscuridad y El color surgido del espacio, que muestran el dominio
                            de este autor del misterio y su evolución hacia la ciencia ficción."
                        </p>

                        
                        
                    </Modal> 
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-292/elhombredetiza-a.jpg" alt="hombreDeTiza"/>
                <button className="seeMore" onClick={openModal2}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal2} isOpen={isOpenModal2}>
                <h1>El hombre de Tiza</h1>
                <h3 >J. C. Tudor</h3>
                <p className="resume">Echando la vista atrás, todo comenzó el día del terrible accidente durante la feria, cuando Eddie, de doce años, conoció al Hombre de Tiza. Fue este quien le dio la idea de los dibujos: una manera de dejar mensajes secretos entre el grupo de amigos. 
                Fue divertido hasta que los dibujos condujeron al cuerpo sin vida de una niña. 
                Sucedió hace treinta años y Ed pensaba que todo había quedado olvidado."
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-323/alma-a.jpg" alt="alma"/>
                <button className="seeMore" onClick={openModal3}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal3} isOpen={isOpenModal3}>
                <h1>Alma</h1>
                <h3 >Carlos Sisí</h3>
                <p className="resume">"Dos ingenieros desarrollan un sistema de reconocimiento de voz capaz de detectar sonidos de otra realidad. 
                Una investigadora de lo paranormal puede ver y oír cosas que no percibe la gente corriente y un periodista interesado 
                en sus trabajos y avances. Alma nos describe un mundo sin un 'Más Allá'. Todo está aquí, rodeándonos."
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-293/el-ritual-a.jpg" alt="elRitual"/>
                <button className="seeMore" onClick={openModal4}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal4} isOpen={isOpenModal4}>
                <h1>El Ritual</h1>
                <h3 >Adam Nevill</h3>
                <p className="resume">"Cuatro viejos amigos de la universidad se reúnen de nuevo para recorrer los parajes salvajes del Círculo Ártico
                 escandinavo y revivir los viejos tiempos. Pero pronto descubren que la vida les ha llevado por caminos diferentes y que poco tienen ya en común. 
                 Con el paso de los días, las desavenencias se van convirtiendo en obstáculos que añadir a los que presenta el terreno virgen y boscoso que pisan y a los problemas derivados de la poca preparación del grupo de excursionistas. Perdidos, hambrientos y rodeados por un bosque que no parece haber sido pisado durante milenios, no parece que la situación pueda empeorar, hasta que se topan con una desvencijada 
                cabaña que esconde en su interior rastros de ritos ancestrales y de sacrificios paganos dedicados a una presencia que todavía habita el bosque."
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-294/elvisitante-a.jpg" alt="ElVisitante"/>
                <button className="seeMore" onClick={openModal5}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal5} isOpen={isOpenModal5}>
                <h1>El Visitante</h1>
                <h3 >Stephen King</h3>
                <p className="resume">"Un niño de once años ha sido brutalmente violado y asesinado. Todas las pruebas apuntan a uno de los ciudadanos más queridos de Flint City: Terry Maitland, entrenador en la liga infantil, profesor de literatura, marido ejemplar y padre de dos niñas. El detective Ralph Anderson ordena su detención. Maitland tiene una coartada firme que demuestra que estuvo en otra ciudad cuando se cometió el crimen, pero las pruebas de ADN encontradas en el lugar de los hechos confirman que es culpable. Ante la justicia y la opinión pública Terry Maitland es un asesino y el caso está resuelto. Pero el detective Anderson no está satisfecho. Maitland parece un buen tipo, 
                un ciudadano ejemplar, ¿acaso tiene dos caras? Y ¿cómo es posible que estuviera en dos sitios a la vez? 
                Querrás no haber hecho esta pregunta. "
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-723/cuentos-inquietantes-a.jpg" alt="CuentosInquietantes"/>
                <button className="seeMore" onClick={openModal6}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal6} isOpen={isOpenModal6}>
                <h1>Cuentos Inquietantes</h1>
                <h3 >Edith Warthon </h3>
                <p className="resume">"Algunos de los cuentos aquí reunidos se escoran levemente hacia lo sobrenatural, en la línea de los geniales relatos de fantasmas de Henry James, historias en las que el elemento ultraterreno sobrevuela la cotidianidad de modo casi imperceptible: sutilmente invasivo, tan evanescente en ocasiones que la duda atenaza al lector hasta el final provocándole una deliciosa inquietud. 
                Y en otros (más desasosegantes si cabe, por cuanto prescinden de lo asombroso) el misterio se oculta en la propia mente, en las ambiguas actitudes de personajes que se nos antojan perturbadores gracias a la pericia de la autora para manejarse en los meandros de su psicología."
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-305/la-ira-a.jpg" alt="LaIra"/>
                <button className="seeMore" onClick={openModal7}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal7} isOpen={isOpenModal7}>
                <h1>La Ira</h1>
                <h3 >Zygmunt Miloszewski</h3>
                <p className="resume">"El fiscal Teodor Szacki no está en su mejor momento. Desde que abandonó Varsovia, 
                siente un perpetuo desajuste tanto en su vida de pareja como en las relaciones con su hija adolescente. Tal vez ese sea el motivo de que un día no adopte todas las medidas necesarias ante una queja por violencia doméstica con consecuencias terribles para la esposa maltratada. 
                O quizá ande afectado por una extraña investigación por asesinato que implica a un esqueleto cuyos huesos pertenecen a varias víctimas."
                </p>
            </Modal>  
            <div className="cardBook">
                <img src="https://www.hola.com/imagenes/estar-bien/20181030132154/libros-novela-negra-y-terror-noche-de-miedo/0-615-300/laaraña-a.jpg" alt="araña"/>
                <button className="seeMore" onClick={openModal8}>
                    Ver más
                </button>
            </div>    
            <Modal closeModal={closeModal8} isOpen={isOpenModal8}>
                <h1>La Araña y otros Cuentos Siniestros</h1>
                <h3 >Hanns Heinz Ewers </h3>
                <p className="resume">"Esta recopilación reúne una amplia selección de los mejores cuentos fantásticos de Ewers, y entre ellos cabe destacar La araña, un relato magistral e inolvidable sobre una serie de misteriosos suicidios ocurridos en una habitación de hotel, La joven blanca, donde un grupo de bohemios se deleita con el espectáculo de una danza macabra, La salsa de tomate, un relato cruel en el que asistiremos a un sangriento combate, El Reino de las Hadas, donde la inocente visión de una niña deja helados a sus mayores, 
                o La Mamaloi, una historia de amor con los sacrificios rituales del Voodoo como escenario."
                </p>
            </Modal>                                                                                                 
                
            </div>
            
            
        </>

    )
        
    
}
