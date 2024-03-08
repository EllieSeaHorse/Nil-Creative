import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <Nav classname={"fixed"}/>
        <div
            className={"h-screen w-full"}
        >
            <img
                src={'/WomenPosterWeb.png'}
                className={"fixed w-full h-full object-cover object-bottom"}
            />
            <Link
                href={"/seasonal"}

                className="flex justify-center items-center h-screen p-10 ">
                <img
                    src={'/NIL POSTER-04.jpg'}
                    className="shadow-sm shadow-violet w-full md:w-2/3 lg:w-3/5 object-contain object-center z-30 opacity-95 "
                />
            </Link>

        </div>
      <Footer className={"fixed"}/>
       </main>
  );
}
