import React from 'react';

const PetHomePage: React.FC = () => {
    const studentInfo = {
        name: 'Promporn Pikulkaew',
        studentId: '026630491005-3',
        email: 'promporn.pik@rmutto.ac.th',
        contact: '-',
        imageUrl: 'https://www.petcratesdirect.com/cdn/shop/articles/siberian-husky_1024x1024.jpg?v=1502391918' 
    };

    return (
        <div className="text-center p-4">
            <h2 className="text-2xl font-bold mb-4">Pet Home Page</h2>
            <p><strong>ชื่อ-สกุล:</strong> {studentInfo.name}</p>
            <p><strong>รหัสนักศึกษา:</strong> {studentInfo.studentId}</p>
            <p><strong>อีเมล:</strong> {studentInfo.email}</p>
            <p><strong>ช่องทางติดต่ออื่น ๆ:</strong> {studentInfo.contact}</p>
            <div className="mt-4">
                <img
                    src={studentInfo.imageUrl}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto"
                />
            </div>
        </div>
    );
};

export default PetHomePage;
