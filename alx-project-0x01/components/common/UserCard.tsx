import { UserCardProps } from "@/interfaces";
import { Span } from "next/dist/trace";

const UserCard: React.FC <UserCardProps> = ({ name, email, role }) => {
    return(
        <div className="bg-green-500 shadow-md border rounded-md p-4 hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-400">{email}</p>
            {role && <span>{role}</span>}
        </div>
    )
}

export default UserCard;