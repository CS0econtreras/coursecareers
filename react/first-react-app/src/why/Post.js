import "./post.css";
//title, author and content are all properties or perameters for the component
export default function Post({title, author, content, }) {
    
    return (
        //i can use an empty tag if I don't want to use a div
        <div className="card">
            <h1>{title}</h1>
            <h3>By: {author}</h3>
            {/*button alows you to use js logic to display the correct button */}
            {/*<button>{following ? "Unfollow" : "Follow"}</button>*/}
            <p>{ content }</p>
        </div>
    );
}