
const ImgCard = ({image, slug}) => {
    return (
        <div className='box-content w-80 h-100 p-4 border-4 border-white'>
            <div className='object-fill'>
                <a href={slug}>
                <img src={image}></img>
                </a>
            </div>
        </div>
        
    )
}

export default ImgCard;