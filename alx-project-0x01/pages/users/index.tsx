import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import UserCard from "@/components/common/UserCard";
import { UserData } from "@/interfaces";

interface UsersPageProps {
  users: UserData[];
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState(users);

  function handleAddUser(newUser: UserData) {
    setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
    setShowModal(false);
  }

  return (
    <div className="container mx-auto py-10">
      <button
        onClick={() => setShowModal(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add User
      </button>

      {showModal && (
        <UserModal onClose={() => setShowModal(false)} onSubmit={handleAddUser} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {userList.map((user) => (
          <UserCard street={""} key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
