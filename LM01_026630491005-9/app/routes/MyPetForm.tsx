import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Header from './Header'; // นำเข้า Header
import Footer from './Footer'; // นำเข้า Footer

// กำหนดรูปแบบข้อมูลที่ใช้ในฟอร์ม
interface PetFormValues {
  petName: string;           // ชื่อสัตว์เลี้ยง
  petType: string;           // ประเภทของสัตว์เลี้ยง
  petGender: 'male' | 'female' | 'other'; // เพศของสัตว์เลี้ยง
  birthDate: string;         // วันเดือนปีเกิดของสัตว์เลี้ยง
  description: string;       // รายละเอียดเพิ่มเติมเกี่ยวกับสัตว์เลี้ยง
  ownerName: string;         // ชื่อเจ้าของ
  ownerEmail: string;        // อีเมลของเจ้าของ
  petImage: FileList;        // รูปภาพของสัตว์เลี้ยง
}

const MyPetForm: React.FC = () => {
  // สถานะเพื่อเก็บข้อมูลที่กรอกไว้หลังจากการส่งฟอร์ม
  const [submittedData, setSubmittedData] = useState<PetFormValues | null>(null);

  // ใช้ hook `useForm` จาก react-hook-form เพื่อจัดการกับฟอร์ม
  const { register, handleSubmit, reset } = useForm<PetFormValues>({
    defaultValues: {
      petGender: 'other', // ค่าเริ่มต้นสำหรับเพศสัตว์เลี้ยง
    }
  });

  // ฟังก์ชันที่เรียกใช้เมื่อฟอร์มถูกส่ง
  const onSubmit: SubmitHandler<PetFormValues> = (data) => {
    setSubmittedData(data); // เก็บข้อมูลที่กรอกไว้ในสถานะ
    // สามารถส่งข้อมูลไปยัง API หรือจัดการอื่นๆ ตามต้องการที่นี่
  };

  // หากมีข้อมูลที่กรอกแล้ว แสดงข้อมูลที่กรอกไว้
  if (submittedData) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">ข้อมูลที่กรอกไว้</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">ข้อมูลสัตว์เลี้ยง</h3>
              {/* แสดงรูปภาพของสัตว์เลี้ยง */}
              {submittedData.petImage.length > 0 && (
                <img
                  src={URL.createObjectURL(submittedData.petImage[0])} 
                  alt="Pet"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              <p><strong>ชื่อสัตว์เลี้ยง:</strong> {submittedData.petName}</p>
              <p><strong>ประเภทสัตว์เลี้ยง:</strong> {submittedData.petType}</p>
              <p><strong>เพศสัตว์เลี้ยง:</strong> {submittedData.petGender}</p>
              <p><strong>วันเดือนปีเกิด:</strong> {submittedData.birthDate}</p>
              <p><strong>รายละเอียดเพิ่มเติม:</strong> {submittedData.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">ข้อมูลเจ้าของ</h3>
              <p><strong>ชื่อเจ้าของ:</strong> {submittedData.ownerName}</p>
              <p><strong>อีเมลเจ้าของ:</strong> {submittedData.ownerEmail}</p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setSubmittedData(null); // ล้างข้อมูลที่กรอกไว้
                  reset(); // รีเซ็ตฟอร์ม
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                กลับไปกรอกข้อมูลใหม่
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">บันทึกข้อมูลสัตว์เลี้ยง</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div>
            <label htmlFor="petImage" className="block text-sm font-medium text-gray-700">รูปภาพสัตว์เลี้ยง</label>
            <input
              id="petImage"
              type="file"
              accept="image/*"
              {...register('petImage')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700">ชื่อสัตว์เลี้ยง</label>
            <input
              id="petName"
              type="text"
              {...register('petName')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">วันเดือนปีเกิด</label>
            <input
              id="birthDate"
              type="date"
              {...register('birthDate')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="petType" className="block text-sm font-medium text-gray-700">ประเภทสัตว์เลี้ยง</label>
            <select
              id="petType"
              {...register('petType')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">เลือกประเภทสัตว์เลี้ยง</option>
              <option value="Dog">สุนัข</option>
              <option value="Cat">แมว</option>
              <option value="Bird">นก</option>
              <option value="Other">อื่น ๆ</option>
            </select>
          </div>
          <fieldset>
            <legend className="block text-sm font-medium text-gray-700">เพศสัตว์เลี้ยง</legend>
            <div className="flex space-x-6 mt-2">
              {['male', 'female', 'other'].map(gender => (
                <label key={gender} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={gender}
                    {...register('petGender')}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    defaultChecked={gender === 'other'}
                  />
                  <span className="text-gray-700">{gender === 'male' ? 'Male' : gender === 'female' ? 'Female' : 'อื่น ๆ'}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">รายละเอียดเพิ่มเติม</label>
            <textarea
              id="description"
              {...register('description')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows={4}
            />
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-center text-gray-800">ข้อมูลเจ้าของ</h3>
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">ชื่อเจ้าของ</label>
            <input
              id="ownerName"
              type="text"
              {...register('ownerName')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">อีเมลเจ้าของ</label>
            <input
              id="ownerEmail"
              type="email"
              {...register('ownerEmail')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* ปุ่มสำหรับส่งฟอร์มและรีเซ็ตฟอร์ม */}
          <div className="flex space-x-4 justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              บันทึกข้อมูล
            </button>
            <button
              type="button"
              onClick={() => reset()} // รีเซ็ตฟอร์ม
              className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              รีเซ็ต
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default MyPetForm;
