import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const UserInfo = ({ }) => {
    const ref = useRef()
    const [width, setWidth] = useState(100)
    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth)
        }
    }, [ref])
    return (
        <div>
            <div ref={ref} className="flex items-center">
                <Image src="/icons/home.svg" height={40} width={34}></Image>
                <div className="mx-3 rounded-full w-10 h-10 bg-cover" style={{ backgroundImage: "url(https://use-me-as-placeholder.vercel.app/student.jpg)" }}></div>
                <div className=" text-lg">
                    นาย xxxxxxxxx xxxxxxxxx
                </div>
                <Image src="/icons/chevron_down.svg" height={20} width={30}></Image>
            </div>
            <div style={{ width }} className="glass bg-white p-5"></div>
        </div>
    );
};

export default UserInfo;
