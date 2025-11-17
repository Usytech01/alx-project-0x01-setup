

 export interface PostProps{
     posts: any;
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps{
    id: number;
    name: string;
    street: string;
    username: string;
    email: string;
    address: {street:string; suit: string; city:string; zipcode:string; 
        geo:{lat:string; lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface PostData{
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suit: string;
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface UserModalProps{
    onClass: () => void;
    onSubmit: (post: UserProps) => void;
}
