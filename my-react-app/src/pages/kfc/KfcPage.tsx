import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function KfcPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  const numberid = watch("numberid");

  const [savedData] = useState(() => {
    const saved = localStorage.getItem("numberid");
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    console.log(savedData);
    if (savedData?.numberid) {
      setValue("numberid", savedData.numberid);
    }
  }, [savedData, setValue]);

  useEffect(() => {
    if (numberid !== undefined) {
      localStorage.setItem("numberid", JSON.stringify({ numberid }));
    }
  }, [numberid]);

  return (
    <>
      <div className=" min-h-screen w-full bg-white text-black">
        <div className="container  ">
          <div className="h-20 items-center justify-center w-[100%] relative flex">
            <Link className="w-[200px]" to="https://rostics.ru">
              <img
                className=" w-full h-full object-cover"
                src="https://s82079.cdn.ngenix.net/brands/rostics.svg
              "
              />
            </Link>
          </div>
          <div>
            {/* Степер статуса заказа */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {/* Шаг 1: Чек */}
              <div className="w-10 h-10 rounded-full bg-[#E30613] text-white flex items-center justify-center">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className="w-3 h-[2px]  bg-[#b4b2b0]"></span>

              {/* Шаг 2: Поварской колпак */}
              <div className="w-10 h-10 rounded-full bg-[#E30613] text-white flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3c-2.4 0-4.4 1.7-4.9 4A4.002 4.002 0 003 11c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4 0-2.1-1.6-3.8-3.7-4-.4-2.3-2.4-4-5.3-4zM6 17h12v2H6v-2z" />
                </svg>
              </div>
              <span className="w-3 h-[2px] bg-[#b4b2b0]"></span>

              {/* Шаг 3: Пакет */}
              <div className="w-10 h-10 rounded-full bg-[#E30613] text-white flex items-center justify-center">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 10c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z" />
                </svg>
              </div>
              <span className="w-3 h-[2px]  bg-[#b4b2b0]"></span>

              {/* Шаг 4: Готово */}
              <div className="w-10 h-10 rounded-full bg-[#fff] text-[#b4b2b0] flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Заголовок статуса */}
            <div className="text-center mb-8">
              <h1 className="!text-4xl font-stretch-condensed font-geo  !font-black  leading-tight tracking-tight text-black mb-2">
                Заказ{" "}
                <span className="text-[#E30613] font-geo font-black ">
                  {numberid}
                </span>{" "}
                Готов
              </h1>
              <p className="text-gray-500 text-lg font-normal">
                Спасибо за заказ!
              </p>
              <input
                className="border-none text-amber-50"
                {...register("numberid", {
                  required: "Введите логин"
                })}
              ></input>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xl font-medium text-black">Твой заказ</span>
              <span className="text-xl font-geo font-normal text-black">
                546 ₽
              </span>
            </div>

            <div
              className=" flex flex-wrap gap-3 sm:gap-4
            "
            >
              {/* Товар 1: Баскет / Байтс */}
              <div className="w-24 h-24 rounded-2xl bg-[#F6F6F6] flex items-center justify-center p-2">
                <img
                  src="https://s82079.cdn.ngenix.net/Wy8356Ept12Z5QcKkAnA63mP.png"
                  alt="Байтс"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Товар 2: Напиток */}
              <div className="w-24 h-24 rounded-2xl bg-[#F6F6F6] flex items-center justify-center p-2">
                <img
                  src="https://s82079.cdn.ngenix.net/9pA2SvhM8yA3mD4C9d8pM2Nk.png"
                  alt="Напиток"
                  className="w-full h-full  p-1  object-contain"
                />
              </div>

              {/* Товар 2: Напиток */}
              <div className="w-24 h-24 rounded-2xl bg-[#F6F6F6] flex items-center justify-center p-2">
                <img
                  src="https://s82079.cdn.ngenix.net/9pA2SvhM8yA3mD4C9d8pM2Nk.png"
                  alt="Ролл по-русски с грибами "
                  className="w-full h-full  p-1 object-contain"
                />
              </div>
              {/* Товар 2: Ролл по-русски с грибами */}
              <div className="w-24 h-24 rounded-2xl bg-[#F6F6F6] flex items-center justify-center p-2">
                <img
                  src="https://s82079.cdn.ngenix.net/9pA2SvhM8yA3mD4C9d8pM2Nk.png"
                  alt="Картофель фри"
                  className="w-full h-full p-1 object-contain"
                />
              </div>
            </div>
          </div>
          {/* Баннер приложения */}
          <div className="w-full bg-[#F7F7F8] rounded-3xl relative w-full bg-[#faf8f6] bg-[url('https://rostics.ru/static/media/background_grey.93e2e5ae5e9.png')] bg-no-repeat bg-cover p-8 overflow-hidden p-6 text-center flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-black mb-3 px-2 leading-snug">
              Заказывайте без очереди в мобильном приложении
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-[280px]">
              Установите мобильное приложение и заказывайте любимые блюда в
              любое время
            </p>
            <div className="">
              <button className="w-full !bg-[#e4002b] hover:bg-red-700 text-white font-semibold !py-3.5 !px-6 !rounded-2xl transition-colors duration-200">
                Скачать приложение
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
