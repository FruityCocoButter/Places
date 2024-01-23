import { UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
    return(
        <div className="fixed inset-y-96 inset-x-96">
            <UserButton />
        </div>
        
    );
}

export default ProtectedPage;