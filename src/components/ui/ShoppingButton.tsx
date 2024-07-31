import Link from "next/link";
import React from "react";

const ShoppingButton = ({ href, title }: { href?: string; title?: string }) => {
  return (
    <button>
      <Link
        className="text-white text-base uppercase px-10 py-2 bg-slate-900 font-semibold"
        href={href ?? ""}
      >
        {title ?? "Buy It"}
      </Link>
    </button>
  );
};

export default ShoppingButton;
