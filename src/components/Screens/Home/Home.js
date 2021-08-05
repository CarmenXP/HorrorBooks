import React from 'react';
import "./Home.css";

export default function Home() {
    return (
        <div className="homeContainer">
            
            <img src="https://frasesdelavida.com/wp-content/uploads/2020/01/libros-de-terror-3.jpg" alt="calavera"/>
            <h1>Bienvenido a Nuestro </h1>
            <h1>Círculo de Horro</h1>
            <br></br>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                electrónicos, quedando esencialmente igual al original. 
                Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
            <br/>
            <h2>Galería Horrorosa</h2>
            <br/>
            <div className="containerGallery" >
                <div className="cards">
                    <img 
                        src="https://cdn-s-www.leprogres.fr/images/D74D8CDD-3E1E-4CDE-920C-5034E4FC8E70/NW_raw/la-peur-c-est-archaique-photo-d-illustration-enriquelopezgarre-de-pixabay-1572419072.jpg"
                        alt="horrorImage"
                    />
                </div>
                <div className="cards">
                    <img 
                        src="https://news.ucdenver.edu/wp-content/uploads/2019/10/Horror-Film-1288x726.jpg"
                        alt="horrorImage"
                    />
                </div>
                <div className="cards">
                    <img 
                        src="https://sm.ign.com/ign_es/screenshot/default/ss-4b33eeb10eab218fc00dbf0ba28f6a84d31755b31920x1080_yuzn.jpg"
                        alt="horrorImage"
                    />
                </div>
                <div className="cards">
                    <img 
                        src="https://image.freepik.com/foto-gratis/horror-dano-espeluznante-habitacion-vacia_307211-168.jpg"
                        alt="horrorImage"
                    />
                </div>
                <div className="cards">
                    <img 
                        src="https://es.babelio.com/users/liste_5-LIBROS-DE-TERROR-PARA-NO-DORMIR-TRANQUILO-NUNCA-_7823.jpeg"
                        alt="horrorImage"
                    />
                </div>
                <div className="cards">
                    <img 
                        src="https://wdet.org/media/daguerre/2020/05/29/bbfa60ca1f565b7c5554.jpeg"
                        alt="horrorImage"
                    />
                </div>
            </div>
        </div>
    )
}
