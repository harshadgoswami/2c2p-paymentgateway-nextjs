import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      Hello World
      <Link href="/product" className="text-blue-500 hover:underline">
        View Product
      </Link>
    </Fragment>
  );
}
