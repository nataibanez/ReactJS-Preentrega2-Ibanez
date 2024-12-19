import './error404.scss'


const Error404 = () => {
  return (
    <div className="error404">
        <div className="error404--text">
            Error 404 - Página no encontrada
        </div>
        <div className="error404--subtext">
            Probablemente sea porque la página está en construcción<br />
            Las secciones que no sean Gin aún no están completas
        </div>
        <img src="/img/underconstruction.jpg" className="error404--image" />
    </div>
  )
}

export default Error404