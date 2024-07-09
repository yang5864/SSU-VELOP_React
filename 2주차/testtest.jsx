import React from "react";

function Testtest() {
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="flex bg-sky-200 h-[100px] p-[10px]">
                {/* 1 */}
                <div className="flex flex-col items-center gap-[3x]">
                    <img
                        src={require("./#2: Clone Google/images/profile.png")}
                        alt=""
                        className="w-[50px] h-[50px]"/>
                    <p>ssu:velop</p>
                </div>

                {/* 2 */}
                <div>
                    <p>공지/이벤트</p>
                    <p>이용안내</p>
                    <p>스터디</p>
                </div>

                {/* 3 */}
                <div>
                    <p>로그인</p>
                    <p>회원가입</p>
                </div>
            </div>

            {/* body */}
            <div>body</div>

            {/* footer */}
            <div>footer</div>
        </div>
    )
}