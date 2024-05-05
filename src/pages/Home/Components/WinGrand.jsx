import { WinGrandImg } from "../../../assets";

function WinGrand() {
  return (
    <div
      style={{ backgroundImage: "url(" + WinGrandImg + ")" }}
      className="bg-cover text-center py-1 rounded-2xl border-2 border-solid border-[#686868] mt-12"
    >
      <div className="my-12 w-[45%] text-white text-left">
        <p className="text-[2.5rem] font-semibold my-0 ml-20">
          Grantni qo‘lga kiriting!
        </p>
        <pre className="">
          {`          MAAB Academyda biz eng yaxshi iqtidor egalariga oyiga 
          3+3 gacha grantlar taqdim etamiz. Agar siz o’zingizni 
          iqtidorli deb hisoblasangiz va ingliz tilini mukammal 
          bilsangiz, kirish imtihonida qatnashing! BI sayohatingizni 
          biz bilan boshlash imkoniyatidan foydalaning!`}
        </pre>
        <button className="ml-20 mt-3 py-2 px-10 border-2 border-white border-solid rounded-2xl bg-transparent text-white">
          Ro’yhatdan o’ting
        </button>
      </div>
    </div>
  );
}

export default WinGrand;
