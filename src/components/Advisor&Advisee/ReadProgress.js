import React from "react";
import notyf from "../../js/Notyf.js";

const ReadProgress = () => {
  const handlerSubmitCheck = (e) => {
    e.preventDefault();
    try {
      //API
      notyf.success("Check");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="ml-[50px] text-[20px]">
        <h5>Progress</h5>
      </div>
      <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
        <form onSubmit={handlerSubmitCheck}>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-1">
              <span>Progress Summary</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ
              </p>
            </div>
          </div>

          <div className="items-center text-start my-10 ">
            <div className="pl-6 pb-5 pt-10">
              <span>Improvements</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <span>Next Goal</span>
            </div>
            <div>
              <p className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[19px] w-[90%] h-[120px] block text-gray-900">
                Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ Bootstrap เป็นเฟรมเวิร์ก CSS
                แบบโอเพ่นซอร์สฟรีที่มุ่งไปที่การพัฒนาเว็บส่วนหน้าสำหรับอุปกรณ์พกพาที่ตอบสนองต่ออุปกรณ์เคลื่อนที่เป็นอันดับแรก
                ประกอบด้วยเทมเพลตการออกแบบที่ใช้ HTML, CSS และ JavaScript
                สำหรับการพิมพ์ แบบฟอร์ม ปุ่ม การนำทาง
                และส่วนประกอบอินเทอร์เฟซอื่นๆ
              </p>
            </div>
          </div>
          <div className="items-center text-start my-10">
            <div className="pl-6 pb-5 pt-10">
              <p>The project is now complete and 50 Percentage</p>
            </div>
          </div>
          <div className="items-center text-start my-10 whitespace-nowrap">
                        <div className="pl-6 py-5"><span>Comment</span></div>
                        <div>
                            <textarea
                                placeholder="Comment..."
                                className="px-4 pt-[0.35rem] ml-[50px] mt-[10px] text-[20px] w-[90%] h-[120px] block text-gray-900 bg-gray-50 rounded-[18px] border border-gray-300 resize-none scrollbar-hide focus:outline-none"
                                value={""}
                                onChange={""}
                            ></textarea>
                        </div>
                    </div>

          <div className="pt-20 pr-2 grid grid-cols-12 ">
            <button
              type="submit"
              className="col-start-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-[18px] text-sm px-6 py-2.5 text-center mr-2 mb-2"
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReadProgress;
