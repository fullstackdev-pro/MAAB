import TargetAudienceCard from "./TargetAudienceCard";

function TargetAudience() {
  let datas = [
    {
      type: "IT sohasiga qiziquvchilar uchun",
      description: "BI (Business Intelligence)ni o'rganmoqchi bo'lganlar uchun",
    },
    {
      type: "Zamonaviy va eng talabgir kasb egasi bo'lishni xohlaganlar uchun.",
      description:
        "Hozirda BI mutaxassislariga bo'lgan talab kundan kunga ortib bormoqda va bu kursni o'rganish orqali yuqori daromadli kasb egasi bo'lishingiz mumkin.",
    },
    {
      type: "Masofadan ishlashni xohlovchilar uchun",
      description:
        "BI mutaxassislari istalgan joydan masofaviy ishlash imkoniyatiga ega. O'zbekistonda turgan xolda Yevropa va Amerika loyihalarida ishlashingiz mumkin.",
    },
    {
      type: "Mantiqiy va tanqidiy fikrlovchilar uchun ",
      description:
        "BI mutaxassislari maʼlumotlar bazasi bilan ishlaganliklari uchun ulardan mantiqiy va tanqidiy fikrlash talab qilinadi.",
    },
    {
      type: "Ingliz tili darajasi B2 dan yuqori boʻlganlar uchun.",
      description:
        "Darslar asosan ingliz tilida o'tilganligi uchun o'quvchilardan ingliz tilini bilish talab qilinadi.",
    },
    {
      type: "Tezroq daromadga chiqishni xohlovchilar uchun",
      description:
        "10 oyda kursni bitirib, BI mutaxassisiga aylanish orqali tezda daromadli kasb egasina aylanishiningiz mumkin.",
    },
  ];

  let result = datas.map((data, index) => {
    return (
      <div key={index}>
        <TargetAudienceCard data={data} />
      </div>
    );
  });

  return (
    <div className="bg-[#3073F6] rounded-2xl px-[8%] py-8 mt-16 ">
      <h1 className="text-white text-center text-[4rem] font-medium">Kurs kimlar uchun?</h1>
      <div className="grid grid-cols-3 gap-6">{result}</div>
    </div>
  );
}

export default TargetAudience;
