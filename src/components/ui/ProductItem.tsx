import Image from "next/image";
import React from "react";

const ProductItem = ({ item }: { item: any }) => {
  return (
    <div>
      <div className="relative pt-[100%]">
        <Image src={item.image} alt={item.title} fill />
      </div>
      <p className="line-clamp-1">{item.title}</p>
      <p>{`$${item.price}`}</p>
    </div>
  );
};

export default ProductItem;
