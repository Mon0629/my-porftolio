import NavBar from "../../components/navigation-bar";
import Card from "../../components/card";
import { Separator } from "../../components/seperator";
import Linkedin from "../../assets/icons/linkedin.png";
import Github from "../../assets/icons/github.png";
import Instagram from "../../assets/icons/instagram.png";

export default function Home() {
  return (
    <div className="flex-1">
      <NavBar />
      <div className="flex flex-col w-full overflow-y-scroll scrollbar-hide h-screen">
        <section className="p-4 min-h-screen flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="md:flex-2 flex flex-col gap-4 md:w-2/3">
            {/* Top Row (larger) */}
            <div className="flex-3 p-4 flex flex-col justify-end mb-4">
                <h1 className="text-6xl font-bold mb-4 font-poppins-italic">Software</h1>
                <h1 className="text-9xl font-bold mb-4 font-inter-bold">Engineer</h1>
            </div>
            {/* Bottom Row (smaller) */}
            <div className="flex-1 p-4">
                <p className="text-gray-700 font-poppins-regular">
                    palomares.raymond.rivamonte@gmail.com
                </p>
                <Separator orientation="horizontal" color="bg-gray-300" thickness="h-px" length="w-1/2" className="my-3" />
                <p className="text-gray-700 font-poppins-regular">+63 915 901 5664</p>
                <Separator orientation="horizontal" color="bg-gray-300" thickness="h-px" length="w-1/2" className="my-3" />
                <div className="flex flex-row gap-4 mt-4">
                    <div className="h-12 w-12 border border-gray-300 rounded-full flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/palomares-raymond-r-87b22a293" className="text-gray-600 hover:underline">
                            <img src={Linkedin} className="w-6 h-6 bg-contain" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="h-12 w-12 border border-gray-300 rounded-full flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/raymond-rivamonte-9b7245234/" className="text-blue-600 hover:underline">
                        <img src={Github} className="w-6 h-6 bg-contain" alt="GitHub" />
                        </a>
                    </div>
                    <div className="h-12 w-12 border border-gray-300 rounded-full flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/raymond-rivamonte-9b7245234/" className="text-blue-600 hover:underline">
                        <img src={Instagram} className="w-6 h-6 bg-contain" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-1 p-4 md:w-1/3 mt-8">
            <div className="bg-white h-full w-full"></div>
        </div>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Project One"
              description="A brief description of Project One."
            ></Card>
            <Card
              title="Project One"
              description="A brief description of Project One."
            ></Card>
            <Card
              title="Project One"
              description="A brief description of Project One."
            ></Card>
          </div>
        </section>
      </div>
    </div>
  );
}
