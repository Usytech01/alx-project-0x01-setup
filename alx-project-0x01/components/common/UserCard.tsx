import { UserProps } from "@/interfaces";


const UserCard: React.FC <UserProps> = ({ name, email, address, company }) => {
    return(
        
        <div className="bg-green-500 shadow-md border rounded-md p-4 hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-400">{email}</p>
            <div>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Company:</strong> {company.name}</p>
            </div>
        </div>
        
    );
};

export default UserCard;