import { useEffect, useState } from "react";

export const DtaMaker = (props) => {
    const { url, renderDataUrl } = props;

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);

    const getData = async (url) => {
        try {
            const response = await fetch(url);
            const resultRequest = await response.json();
            if (response.ok) {
                setPosts( resultRequest );
            } else {
                setError( { error: resultRequest } );
                throw new Error(`Album can't download, because there was an error ${error}`);
            }
          } catch (error) {
            console.log('error.message :>> ', error.message);
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