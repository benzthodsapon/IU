function IuItem(props) {
    const { iu } = props;
    return (
        <div className="Iu-item">
            <img src={iu.picUrl} />
            <h4>{iu.tittle}</h4>
        </div>
    );
}
export default IuItem;