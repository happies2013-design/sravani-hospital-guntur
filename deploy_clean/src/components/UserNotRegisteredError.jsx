import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const UserNotRegisteredError = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-red-100 rounded-full">
                        <AlertCircle className="w-12 h-12 text-red-600" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Account Not Registered
                </h1>

                <p className="text-gray-600 mb-8">
                    The account you are trying to access does not appear to be registered in our system. Please check your credentials or register for a new account.
                </p>

                <div className="flex flex-col gap-3">
                    <Button
                        onClick={() => navigate('/login')}
                        className="w-full"
                    >
                        Go to Login
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/')}
                        className="w-full"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserNotRegisteredError;
