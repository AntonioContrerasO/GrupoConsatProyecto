const contenido = [
  {
    id: 1,
    title: "Topografía por dron",
    date: "19 Mazo 2018",
    content: "Mediante el uso de un dron se capturan datos aéreos con sensores orientados hacia el terreno, como cámaras RGB o multiespectrales y sensores LIDAR.",
    isImage:true,
    imgURL:"ee2dbd1d40e73696b2dfc5d0b7bb4e4d9479e59eb3f96740f72dd26e82edca24c63240eab3355fb9e5c621d3c0c8036f54428dd2db0d0e1d952b6f_1280.jpg"
  },
  {
    id: 2,
    title: "Mapas geológicos",
    date: "19 Mazo 2018",
    content:"Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados."
    ,isImage:true,
    imgURL:"MapaGeologicoSIG.png",
    isFile:true,
    archivoPDF:"GRUPOCONSAT-ORGANIGRAMAGENERAL.pdf"
  },{
    id:3,
    title: "Prueba Video",
    date: "19 Mazo 2018",
    content:"Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados.",
    isVideo:true,
    urlVideo:"z7z76bgh_Zk"

  },{
    id:4,title: "Prueba mapa",
    date: "19 Mazo 2018",
    content:"Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados.",
    isMap:true,
    urlMap:"https://cloud.pix4d.com/project/embed/1212224-79c51baf5a3d4f97864191b54f4b40cf/"
  },{
    id:5,title: "Prueba mapa 3D",
    date: "19 Mazo 2018",
    content:"Estudio de estructuras geológicas mediante la aplicación de metodologías de geología estructural mediante la elaboración de mapas geológicos y temas relacionados.",
    isMap:true,
    urlMap:"https://cloud.pix4d.com/embed/bim/mesh/1212224?shareToken=79c51baf5a3d4f97864191b54f4b40cf"
  }
];

//https://cloud.pix4d.com/embed/bim/mesh/1212224?shareToken=79c51baf5a3d4f97864191b54f4b40cf




function Texto(props){
  return (<div className="u-size-30 u-size-60-md">
    <div className="u-layout-col">
      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-2">
        <div className="u-container-layout u-valign-top u-container-layout-2">
            <h1 className="u-text u-text-default u-block-control u-block-6715-9" style={{marginBottom: "0px", marginTop: "0px",textTransform: "uppercase", fontWeight: "700"}}>​{props.title}</h1>
            <h4 className="u-heading-font u-text u-text-grey u-text-4">{props.date}</h4>
          <p className="u-text u-text-2">{props.content}<br/>
          </p>
          {props.isMap === true ? <Button url={props.urlMap} text={"Ver en pantalla completa"}/>:null}
          {props.isFile === true ? <Button url={"files/"+props.archivoPDF} text={"Consultar archivos"}/>:null}
        </div>
      </div>
    </div>
  </div>)
}

function Button(props){
  return(
    <h5><a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-1 u-block-control u-block-6715-16"
    style={{backgroundImage: "none", padding:"0px"}} href={props.url}>​{props.text}</a></h5>
        )
}

function Image(props){
  return (
    <div className="u-size-30 u-size-60-md">
     <div className="u-layout-col">
       <div className="u-container-style u-image u-layout-cell u-left-cell u-size-60" data-image-width="1080" data-image-height="1080">
         <img className="u-expanded-width u-image u-image-1" src={"images/"+props.imgURL} data-image-width="1280"
           data-image-height="713"/>
       </div>
     </div>
   </div>
)}

// 1.jpeg

function Video(props){
  return (
    <div className="u-size-30 u-size-60-md u-layout-cell u-container-style u-block-control ui-draggable ui-droppable u-block-6715-4" style={{minHeight: "277px"}}>
      <div className="u-container-layout u-block-6715-5" style={{padding:"0,0,0,0"}}>
        <div className="u-custom-html u-clearfix u-block-control u-block-6715-6" style={{height: "100%", width: "100%" ,margin:"0"}}>
        <iframe width="100%" height="524" src={https://www.youtube.com/embed/+props.urlVideo+"?mute=0&amp;showinfo=1&amp;controls=1&amp;start=0&amp;"} frameborder="0" allowfullscreen="1"></iframe></div>
      </div>
    </div>
    )
}

// https://www.youtube.com/embed/z7z76bgh_Zk

function Mapa(props){
  return (<div className="u-size-30 u-size-60-md u-layout-cell u-container-style u-block-control ui-draggable ui-droppable u-block-6715-4" style={{minHeight: "277px"}}>
    <div className="u-container-layout u-block-6715-5" style={{padding:"0,0,0,0"}}>
      <div className="u-custom-html u-clearfix u-block-control u-block-6715-6" style={{height: "100%", width: "100%" ,margin:"0"}}>
      <iframe width="100%" height="524" src={props.urlMap} frameborder="0" allowfullscreen=""></iframe></div>
    </div>
  </div>
)

}





ReactDOM.render( <div className="u-gutter-0 u-layout">
  {contenido.map((post)=>{
    return (<div className="u-layout-row" style={{
    marginBottom: "100px"}}>
      {post.isImage === true ? <Image imgURL={post.imgURL}/>: null}
      {post.isVideo === true ? <Video urlVideo={post.urlVideo}/>:null}
      {post.isMap === true ? <Mapa urlMap={post.urlMap}/>:null}
      <Texto
      title={post.title}
      date={post.date}
      content={post.content}
      isMap={post.isMap}
      urlMap={post.urlMap}
      isFile={post.isFile}
      archivoPDF={post.archivoPDF}
      />
      </div>)
  })}

</div>, document.querySelector('#root'))
