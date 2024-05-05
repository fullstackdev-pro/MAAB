import { BackendPattern } from "../../../assets";

function CoursesCard(data) {
  return (
    <>
      <p className="text-[2rem] font-semibold text-[#1460F2] px-6">{data.data.name}</p>
      <p className="text-[#313131] px-6">{data.data.description}</p>
      <div
        style={{ backgroundImage: "url(" + BackendPattern + ")" }}
        className="px-4 py-4 bg-repeat-x mb-8"
      >
        <p className="text-[#454545] text-[0.85rem] my-0">Kurs narxi: </p>
        <p className="text-[1.25rem] text-[#000000] my-0">{data.data.price}</p>
      </div>
    </>
  );
}

export default CoursesCard;
