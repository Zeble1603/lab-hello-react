function Element(props) {
    return(
        <div className="element">
            <img src={props.picture.src} alt={props.picture.alt}></img>
            <div className="text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Element