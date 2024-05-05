import { BackendPattern } from "../../../assets";

function ExpertsSalaryCard(data) {
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + BackendPattern + ")" }}
        className="bg-repeat-x text-center py-1 rounded-2xl border-2 border-solid border-[#686868]"
      >
        <p className=" text-[#E26020] text-[2rem] font-semibold mb-0">
          {data.data.type}
        </p>
        <p className="mt-0">{data.data.description}</p>
      </div>
    </>
  );
}

export default ExpertsSalaryCard;
