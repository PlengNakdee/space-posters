
const ImgCard = ({image}) => {
    return (
        <div className='box-content w-80 h-100 p-4 border-4'>
            <div className='object-fill'>
                <img src={image}></img>
            </div>
        </div>
        
    )
}

export default ImgCard;