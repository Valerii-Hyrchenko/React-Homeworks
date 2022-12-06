import '../../style/App.css';
export const Post = ({ post }) => {
    const { title, completed } = post
    return (
        <li className="task-3-li">
            <div>
                <p>
                    {`Title: ${title} - completed ${completed}`}
                </p>
            </div>
        </li>
    )
}