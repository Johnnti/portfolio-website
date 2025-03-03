import Image from "next/image";

export default function Home() {
  return(
    <div className="flex flex-col h-screen">
        <header>
          <nav className="text-xl">
            <a href="#" className="float-right mx-2 inline-block">Profile</a>
            <a href="#" className="float-right mx-2 inline-block">Resume</a>
            <a href="#" className="float-right mx-2 inline-block">Projects</a>
          </nav>
        </header>
        <main className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-5xl text-center">John Nti Anokye</h1>
          <h2 className="text-3xl text-center border">FULL STACK WEB DEVELOPER</h2>
          <div className="flex justify-center mt-10">
            <Image className="rounded-full" src="/jna.jpg" alt="John Nti Anokye" width={200} height={200} /></div>
          <div className="flex justify-center mt-10">
            <a href="https://github.com/Johnnti" className="mx-2 inline-block"><img className="stroke-[#b5661d]" src="/github-mark.svg" alt="Github" width={50} height={50} /></a>
            <a href="https://www.linkedin.com/in/john-nti-anokye/" className="mx-2 inline-block"><img className="stroke-[#b5661d]" src="/linkedin.svg" alt="Linkedin" width={50} height={50} /></a>
          </div>
        </main>
        <footer></footer>
</div>
  )
}
