import StudyTypesCard from "./StudyTypesCard";

function StudyCard() {
  let datas = [
    {
      type: "Shartnoma asosida",
      description: "10 oylik kursni shartnoma asosida o'qishingiz mumkin",
    },
    {
      type: "Shartli Grant",
      description:
        "Talant dasturi doirasida kursni bepul o'qib, kurs pulini shu soha boʻyicha ishga kirganingizdan soʻng, oyligingizning bir qismidan to'lashingiz mumkin.",
    },
    {
      type: "100% Grant",
      description:
        "Imtihonlardan kerakli ballarni toʻplash orqali kursni 100% bepul o'qishingiz mumkin.",
    },
  ];

  let result = datas.map((data, index) => {
    return (
      <div key={index} className="bg-[#F5F5F7] rounded-2xl">
        <StudyTypesCard data={data} />
      </div>
    );
  });

  return <div className="grid grid-cols-3 gap-4">{result}</div>;
}

export default StudyCard;
