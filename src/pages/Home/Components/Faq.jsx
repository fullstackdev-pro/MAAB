import FaqComponents from "./FaqComponents";

function Faq() {
  let data = [
    {
      question:
        "Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda  menda qiyinchiliklar bo’lmaydimi?",
      answer:
        "Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin.",
    },
    {
      question: "Kurs tugatkandan so’ng sertifikat beriladimi?",
      answer: "",
    },
    {
      question:
        "Dasturlash foundation kursini boshlashdan oldin nimalarni bilish kerak?",
      answer: "",
    },
    {
      question: "Kursdan foyda olmasam, pulim qaytarib beriladimi?",
      answer: "",
    },
    {
      question:
        "Dasturlash foundation kursini bitirib o’quvchi qanday ko’nikmalarga ega bo’lishi kerak?",
      answer: "",
    },
    {
      question: "kursni sotib olsam, undan doim foydalana olamanmi?",
      answer: "",
    },
    {
      question: "Kursda o’qish ucun kompyuterim bo’lishi kerakmi?",
      answer: "",
    },
  ];

  let result = data.map((data, index) => {
    return (
      <div key={index}>
        <FaqComponents data={data} />
      </div>
    );
  });

  return (
    <div className="text-center bg-[#F5F5F7] py-16 px-32 mt-16">
      <p className="text-[#353437] text-[3rem] font-bold my-0">
        Ko‘p so‘ralgan savollar
      </p>
      <p className="text-[#5D5D5F] text-[1.25rem] px-[15%]">
        Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их
        навыки английского языка, математики и решения задач.{" "}
      </p>
      <div className="grid grid-cols-2 gap-x-4">{result}</div>
    </div>
  );
}

export default Faq;
