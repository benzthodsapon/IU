function IuItem(props) {
    const { iu,onIuClick } = props;
    return (
        <div className="Iu-item">
            <img src={iu.picUrl} onClick ={() => {onIuClick(iu)}}  />
            <h4>{iu.tittle}</h4>
        </div>
    );
}
export default IuItem;