import './IuToPost.css';
function IuToPost(props){
    const { iu,onBgClick } = props;
    return(
        <div className ="Iu-post">
            <div className = "Iu-post-bg" onClick = {onBgClick} />
            <div className = "Iu-post-content">
                <img src={iu.picUrl} />
                <h4>{iu.tittle}</h4>
            </div>

        </div>
    );
}

export default IuToPost;