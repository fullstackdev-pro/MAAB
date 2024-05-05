import ExpertsSalaryCard from "./ExpertsSalaryCard";

function ExpertsSalary() {
  let datas = [
    {
      type: "2 000 000+",
      description: "Dunyo bo’ylab bo’sh ish o’rinlari",
    },
    {
      type: "400$-2 000$+",
      description: "O’zbekistondagi maoshlar",
    },
    {
      type: "6 000$+",
      description: "AQSHdagi boshlang’ich maoshlar",
    },
  ];

  let result = datas.map((data, index) => {
    return (
      <div key={index}>
        <ExpertsSalaryCard data={data} />
      </div>
    );
  });

  return (
    <div className="bg-[#F5F5F7] pt-2 pb-12 mt-16 rounded-2xl">
      <p className="text-center text-[2.5rem] text-[#1460F2]">BI mutaxassislarining daromadi qancha?</p>
      <div className="grid grid-cols-3 gap-8 mx-8">{result}</div>
    </div>
  );
}

export default ExpertsSalary;
