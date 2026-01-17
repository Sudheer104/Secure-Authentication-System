import React, { useEffect, useRef, useState } from 'react'
import AuthService from '../Services/AuthService';

function UpdateProfile() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState({})

    const fileInputRef = useRef();

    const refreshData = () => {
        const userData = AuthService.getUserData();

        setName(userData.name)
        setEmail(userData.email)
        setMobile(userData.mobile)
        setImage(null)
        setImageUrl(import.meta.env.VITE_API_BE_URL + "" + userData.image)
        
        if(fileInputRef.current){
            fileInputRef.current.value = "";
        }
    }

    useEffect(() => {
        refreshData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

        const formData = new FormData();
        formData.append('name', name);
        formData.append('mobile', mobile);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await AuthService.updateUserData(formData);
            const data = response.data;
            if (data.success) {
                alert(data.msg)
                AuthService.setUserData(data.user);
                refreshData();
            } else {
                alert(data.msg)
            }
        } catch (error) {
            console.log(error);

            if (error.response && error.response.status === 400) {
                if (error.response.data.errors) {
                    const apiErrors = error.response.data.errors;
                    const newErrors = {};
                    apiErrors.forEach(apiError => {
                        newErrors[apiError.path] = apiError.msg;
                    });
                    setErrors(newErrors)
                } else {
                    alert(error.response.data.msg || error.message);
                }
            } else {
                alert("This session has expired please try again");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="bg-gray-800 shadow-xl rounded-xl p-6 w-full max-w-lg">

                {/* Profile Image Section */}
                <div className="flex flex-col items-center mb-6">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
                        />
                    ) : (
                        <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                    <h2 className="text-white text-xl font-semibold mt-3">Update Profile</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 mb-1 font-medium">
                            Enter Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-gray-300 mb-1 font-medium">
                            Select Image
                        </label>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full p-2 rounded bg-gray-700 text-white cursor-pointer"
                        />
                        {errors.image && <p className="text-red-400 mt-1">{errors.image}</p>}
                    </div>

                    {/* Email (Disabled) */}
                    <div>
                        <label className="block text-gray-300 mb-1 font-medium">
                            Your Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full p-2 rounded bg-gray-600 text-gray-300"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-gray-300 mb-1 font-medium">
                            Enter Mobile No.
                        </label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter mobile number"
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.mobile && <p className="text-red-400 mt-1">{errors.mobile}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
