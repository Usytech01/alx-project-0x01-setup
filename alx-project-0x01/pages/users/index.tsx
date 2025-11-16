import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps{
    posts: UserProps[];
}

export async function getStaticProps() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return{
        props: {
            posts,
        },
    };
}


const Users: React.FC<UsersPageProps> = ({ posts }) => {
    return(
        <div className="continer mx-auto py-10 grid grid-cols-1">
            {posts.map((user) => (
               <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username} address={{
                        street: "",
                        suit: "",
                        city: "",
                        zipcode: "",
                        geo: {
                            lat: "",
                            lng: ""
                        }
                    }} phone={""} website={""} company={{
                        name: "",
                        catchPhrase: "",
                        bs: ""
                    }}               />
            ))}
        </div>
    
    
    )

}

export default Users;
