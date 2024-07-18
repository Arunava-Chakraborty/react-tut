export default function Details({
    // eslint-disable-next-line react/prop-types
    username = "Ac" , 
    
}){
    return(
        <figure>
            <img src="https://news.artnet.com/app/news-upload/2014/10/Capture2.jpg" alt="" />
            <figcaption>
                Hey {username}
            </figcaption>
        </figure>
    )
}