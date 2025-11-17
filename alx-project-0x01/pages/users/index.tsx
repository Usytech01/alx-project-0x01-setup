import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

/*Defines the type for the page component’s props. This page expects a posts prop which is an array of UserProps.
Note about naming: the variable is called posts in your getStaticProps return.*/
interface UsersPageProps{ posts: UserProps[]; }

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return{
        props: { posts, },
    };
}

/* Declares the Users React component typed with UsersPageProps. It receives posts via props (populated by getStaticProps). */
/* Loops through every item in the posts array and Returns a new array, arrow function that receives each individual item from the array. */
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
                    }} street={""}               />
            ))}
        </div>
    
    
    )

}

export default Users;
