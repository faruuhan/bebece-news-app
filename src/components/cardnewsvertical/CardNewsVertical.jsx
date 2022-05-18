import React from "react";
import { Image } from "@mantine/core";

const CardNewsVertical = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <Image
          width={250}
          src={`https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          classNames={{
            image: "aspect-[4/3]",
          }}
          alt="With default placeholder"
          withPlaceholder
        />
        <div>
          <h3 className="font-semibold text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores?</h3>
          <p className="text-neutral-400 font-normal">12 Mei 2022</p>
          <p className="text-neutral-700 font-normal">Source: detik.com</p>
        </div>
      </div>
      <div className="flex gap-1">
        <Image
          width={250}
          src={`https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
          classNames={{
            image: "aspect-[4/3]",
          }}
          alt="With default placeholder"
          withPlaceholder
        />
        <div>
          <h3 className="font-semibold text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores?</h3>
          <p className="text-neutral-400 font-normal">12 Mei 2022</p>
          <p className="text-neutral-700 font-normal">Source: detik.com</p>
        </div>
      </div>
    </div>
  );
};

export default CardNewsVertical;
