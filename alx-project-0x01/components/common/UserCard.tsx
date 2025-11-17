import { UserProps } from "@/interfaces";
import Header from "../layout/Header";

 /*React.FC<UserProps> is the typing: it tells TypeScript this component receives props shaped like UserProps.
The parameter destructures name, email, address, company from the props for easy use inside the component. We intentionally take only fields we need; UserProps contains more fields (like id, phone, etc.) but they’re optional to destructure.*/ 

const UserCard: React.FC <UserProps> = ({ name, email, address, company }) => {
    return(
        <div className="bg-green-500 shadow-md border rounded-md p-4 hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-400">{email}</p>
            <div className="mt-3 text-sm text-gray-700">
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Company:</strong> {company.name}</p>
            </div>
        </div>
        
    );
};

export default UserCard;