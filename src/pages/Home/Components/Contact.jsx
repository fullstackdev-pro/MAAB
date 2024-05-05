import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [logicalLevel, setLogicalLevel] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-11 gap-8 bg-[#F5F5F7] m-16 rounded-2xl p-8 ">
      <div className="col-span-5">
        <p className="text-[2.25rem] font-semibold mt-2">
          MAAB Academy bilan BI kelajagingizni oching! Hozir roʻyxatdan oʻting!
        </p>
        <p>
          Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega
          bo`ling
        </p>
      </div>
      <div className="rounded-2xl bg-[#FFFFFF] col-span-6 p-6">
        <form onSubmit={handleSubmit}>
          <p className="mt-0 text-[#353437] text-[1.5rem] font-semibold">
            Kursga yozilish
          </p>
          <div className="grid grid-cols-2 pag-4 text-[#353437]">
            <label>
              Ismingiz:
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-xl bg-[#F5F5F7] w-[90%] border-none"
                placeholder="Abbos"
                required
              />
            </label>

            <label>
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-2 rounded-xl bg-[#F5F5F7] w-[95%] border-none"
                placeholder="+998"
                required
              />
            </label>

            <label className="mt-4">
              Ingliz tili darajangiz:
              <select
                value={englishLevel}
                onChange={(e) => setEnglishLevel(e.target.value)}
                className="p-2 rounded-xl bg-[#F5F5F7] w-[95%] border-none"
                required
              >
                <option value="">Darajangiz:</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>

            <label className="mt-4">
              Mantiqiy bilim darajangiz:
              <select
                value={logicalLevel}
                onChange={(e) => setLogicalLevel(e.target.value)}
                className="p-2 rounded-xl bg-[#F5F5F7] w-full border-none"
                required
              >
                <option value="">Bilim darajangiz</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>
          <div className="mt-4 flex">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              value={checked}
              onClick={() => setChecked(!checked)}
              required
            />
            <label className="text-[0.8rem]">
              {" "}
              Arizani topshirish orqali siz shaxsiy ma`lumotlaringizni “
              <span className="text-[#2868B2] cursor-pointer">
                Maxfiylik siyosati
              </span>
              ”ga muvofiq qayta ishlashga rozilik bildirasiz
            </label>

            <button
              type="submit"
              className="mt-4 py-2 w-[50%] rounded-3xl border-none bg-[#236BF4] text-[white] text-[0.9rem]"
            >
              Arizani jo’natish <FaArrowRightLong className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
