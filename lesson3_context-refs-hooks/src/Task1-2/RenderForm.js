export const Form = (props) => {
    const {
        numberItems,
        handleChangeItems,
        handleSubmitItems
    } = props;
    
    return (
        <div className="album-form">
            <form type="submit" onSubmit={handleSubmitItems}>
                <input onChange={handleChangeItems}
                placeholder="Number of album items"
                type="number" value={numberItems}
                name="numberItems"></input>
                <button>Show count of items</button>
            </form>
        </div>
    )
}