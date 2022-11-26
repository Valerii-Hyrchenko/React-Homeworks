export const Album = ({ albumToRender }) => {
    if (albumToRender.length > 1) {
        return (<div className="album-list">
                {albumToRender.map((item) => (
                    <div key={item.id}>
                        {item.id}-{albumToRender.indexOf(item)}-{item.title};
                    </div>
                ))}
            </div>)
    }
}