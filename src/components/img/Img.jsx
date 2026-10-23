const Img = ({ src, load = false, alt }) => {
    return (
        <img src={src} alt={alt} loading={load ? "lazy" : "eager"} />
    )
}

export default Img;