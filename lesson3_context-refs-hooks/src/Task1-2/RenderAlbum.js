export const RenderAlbum = ({ albumToRender }) => {
    if (albumToRender) {
        return (<div className="album-list">
                {albumToRender.map((item) => (
                    <div key={item.id}>
                        {item.id}-{albumToRender.indexOf(item)}-{item.title};
                    </div>
                ))}
            </div>)
    }
}