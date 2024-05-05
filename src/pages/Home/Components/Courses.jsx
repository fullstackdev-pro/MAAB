import CoursesCard from "./CoursesCard";

function Courses() {
  let data = [
    {
      name: "DATA ANALYTICS",
      description:
        "Aniq tushunchalar va tahlillarga sho'ng'ing. Ma'lumotlardan mazmunli namunalarni olish, biznes qarorlarini qabul qilish imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing. Bizning amaliy yondashuvimiz sizning ishga tayyor bo’lishingizni ta'minlaydi.",
      price: "23,975,000 so'm",
    },
    {
      name: "DATA ENGINEERING",
      description:
        "Ishonchli ma'lumotlar infratuzilmasini qurishni o'rganing. Data Engineering sohasida muvaffaqiyatli kar’yera qurish uchun ma'lumotlar tizimlarini loyihalash va joriy etish ko'nikmalariga ega bo'ling. Haqiqiy loyihalar sizning amaliy tajribangizni oshiradi.",
      price: "23,975,000 so'm",
    },
  ];
  return (
    <div className="text-center mt-20 mx-12">
      <p className="text-[2.5rem] font-bold text-[#1460F2] my-0">
        MAAB Akademiyasida BI imkoniyatlarini oching!
      </p>
      <p className="text-[1.25rem]">
        Biz nafaqat nazariyani o’rgatamiz, balki o’quvchilarimizga qisqa vaqt
        ichida global miqyosda raqobatbardosh dasturchilar bo’lish imkoniyatini
        beradigan haqiqiy bilimlarni taqdim etamiz. Sizning kar’erangiz butkul
        o’zgarishi shu erdan boshlanadi
      </p>
      <div className="grid grid-cols-2 gap-8">
        {data.map((data, index) => (
          <div key={index} className="text-left bg-[#F5F5F7] rounded-2xl">
            <CoursesCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
