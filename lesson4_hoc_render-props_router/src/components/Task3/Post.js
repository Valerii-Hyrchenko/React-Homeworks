import '../../style/App.css';
export const Post = ({ post }) => {
    const { title, completed } = post
    return <div>{`Title: ${title} - completed ${completed}`}</div>
}