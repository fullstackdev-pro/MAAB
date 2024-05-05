import { BackendPattern } from "../../../assets";

function StudyTypesCard(data) {
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + BackendPattern + ")" }}
        className="mx-4 bg-repeat-x rounded-2xl"
      >
        <p className="text-center text-[#E26020] text-[2rem] font-semibold py-8">
          {data.data.type}
        </p>
      </div>
      <p className="text-center text-[1.1rem] px-12">{data.data.description}</p>
    </>
  );
}

export default StudyTypesCard;
