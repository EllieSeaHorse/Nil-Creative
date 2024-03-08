import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
export default function Home() {
  return (
    <main className="">
      <Nav/>
        <div
            className={"h-screen w-full"}
        >
            {/*<img*/}
            {/*    src={'/WomenPosterWeb.png'}*/}
            {/*    className={"w-full h-full object-cover object-bottom"}*/}
            {/*/>*/}
        </div>
      <Footer/>
       </main>
  );
}
