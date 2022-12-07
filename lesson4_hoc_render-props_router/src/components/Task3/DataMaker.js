import { useEffect, useState } from "react";

export const DtaMaker = ( { url, renderDataUrl } ) => {

    const [posts, setPosts] = useState([]);

    const getData = async (url) => {
        try {
            const response = await fetch(url);
            const resultRequest = await response.json();
            if (response.ok) {
                setPosts( resultRequest );
            } else {
                throw new Error(`Posts can't download, because there was an error code - ${response.status}`);
            }
          } catch (error) {
            console.log('error :>> ', error.message);
          }
    }

    useEffect(() => {
        getData(url);
    }, [])

    return (
        <div>
            {renderDataUrl(posts)}
        </div>
    )
}