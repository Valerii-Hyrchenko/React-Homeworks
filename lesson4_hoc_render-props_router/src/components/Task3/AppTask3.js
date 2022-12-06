import { DtaMaker } from "./DataMaker";
import { Posts } from "./Posts";

export const AppTask3 = () => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

    return (
        <div>
            <DtaMaker url={url} renderDataUrl ={(posts) => <Posts posts={posts} />} />
        </div>
    )
}