const contenido = [
  {
    id: 1,  // SIEMPRE AGREGAR EL NUMERO AL SIGUIENTE QUE SI NO VA A FALLAR POR EJEMPLO ESTE ES EL #1
    title: "Topografía por dron",
    date: "19 Mazo 2018",
    content: "Mediante el uso de un dron se capturan datos aéreos con sensores orientados hacia el terreno, como cámaras RGB o multiespectrales y sensores LIDAR.",
    imgURL:"ee2dbd1d40e73696b2dfc5d0b7bb4e4d9479e59eb3f96740f72dd26e82edca24c63240eab3355fb9e5c621d3c0c8036f54428dd2db0d0e1d952b6f_1280.jpg"
  },
  {
    id: 2, //ESTE ES EL NUMERO 2
    title: "Geotecnia",
    date: "21 Julio 2022",
    content: "Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados.",
    imgURL:"MapaGeologicoSIG.png"
  },
  {
    id: 3,
    title: "Prueba #3",
    date: "21 Julio 2022",
    content: "Este texto y sección es modificable, así como se puede cambiar la foto",
    imgURL:"09fb4bf834c808508046f60397fd2d65228ce3f3e757c395a6e12d4da816e0eef43b1378971ded30efe190e6f5ec5843b7d5ab81e0991a083f3b10_1280.jpg"
  },{
    id: 4,
    title: "Se pueden agregar tantos post como se quiera a su antojo",
    date: "21 Julio 2022",
    content: "Simplemente tienen que ingresar el titulo, la imagen, el contenido y la fecha.",
    imgURL:"16-11-10_1059.jpg"
  }];

function EditableBLock(props){
  return (<div className="u-align-left u-container-style u-layout-cell u-left-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1000" data-animation-out="0">
    <div className="u-container-layout">
      <img className="u-expanded-width u-image u-image-1" src={"images/"+props.imgURL} data-image-width="1280"
        data-image-height="713"/>
      <h3 className="u-heading-font u-text u-text-3">{props.title}</h3>
      <h4 className="u-heading-font u-text u-text-grey u-text-4">{props.date}</h4>
      <p className="u-text u-text-font u-text-5">{props.content}</p>
      <a href="#" className="u-border-1 u-custom u-link u-text-black u-link-1">Leer más</a>
    </div>
  </div>)
}

    ReactDOM.render( <div className="u-layout-row">
      {contenido.map((post)=>{
        return (<EditableBLock
        title={post.title}
        date={post.date}
        content={post.content}
        imgURL = {post.imgURL}
        />)
      })}</div> , document.querySelector('#root'));
