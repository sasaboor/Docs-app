import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
    const ref= useRef(null)
  const data = [
    {
      desc: "Lorem issspsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Lorem issspsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Lorem issspsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
      },
  ];
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
