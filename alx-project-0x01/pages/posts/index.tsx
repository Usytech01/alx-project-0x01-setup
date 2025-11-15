import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Post: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="flex justify-between">
                    <h1 className="text-2x1 font-semibold">Post Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                    <div className="grid grid-cols-3 gap-2">
                        {
                            Post?.map(({ title, body, userId, id}: PostProps, key: number) => (
                                <PostCard title={title} body={body} userId={userId} id={id} key={key} />
                                
                            ))
                        }
                    </div>
            </main>
        </div>
    )
}

const users =[
    { name: "John Doe", email: "john@example.com", role: "Admin"},
    { name: "Jane Smith", email: "jane@example.com", role: "Editor"},
    { name: "Michael Brown", email: "michael@example.com", role: "Users"},
]

const Users = () => {
    return(
        <div>
            {users.map((user, index) => (
                <UserCard 
                key={index}
                name={user.name}
                email={user.email}
                role={user.role}
                />
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return{
        Props:{
            posts
        }
    }
}

export default Post;

