import React from "react";

const Appointment = () => {
    return (
        <>
            <div className="ml-[50px] text-[20px]">
                <h5>Create Appointment</h5>
            </div>
            <div className="relative w-[70%] h-[83%] overflow-y-auto shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.1)] sm:rounded-[20px] left-[80px] mt-12 scrollbar-hide ">
                <form>
                    <div className="grid grid-flow-col">
                        <h4>Title</h4>
                        <input type="text" className=""/>
                        <h4>Date</h4>
                        <input type="date" />
                        <h4>From</h4>
                        <input type="time" />
                        <h4>To</h4>
                        <input type="time" />
                    </div>
                </form>
                <div>
                    Appointment Log
                </div>
            </div>
        </>
    );
}
export default Appointment