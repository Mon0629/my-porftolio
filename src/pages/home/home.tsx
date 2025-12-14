import NavBar from "@/components/navigation-bar";
import { Separator } from "@/components/seperator";
import Linkedin from "../../assets/icons/linkedin.png";
import Github from "../../assets/icons/github.png";
import Instagram from "../../assets/icons/instagram.png";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Home() {

const tools = [
  { name: "React", description: "A JavaScript library for building user interfaces." },
  { name: "TypeScript", description: "A typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { name: "GraphQL", description: "A query language for your API, and a server-side runtime for executing queries." },
  { name: "Docker", description: "A platform for developing, shipping, and running applications in containers." },
];




  return (
    <div className="flex-1">
      <NavBar />
      <div className="flex flex-col w-full overflow-y-scroll scrollbar-hide h-screen">

        {/* ==========Home Page Section ==============*/}

        <section className="p-4 min-h-screen flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="md:flex-2 flex flex-col gap-4 md:w-2/3 ">
            {/* Top Row (larger) */}
            <div className="flex-3 p-4 flex flex-col justify-end mb-4 bg-amber-500">
                <h1 className="text-6xl font-bold mb-4 font-poppins-italic">Software</h1>
                <h1 className="text-9xl font-bold mb-4 font-inter-bold">Engineer</h1>
            </div>
            {/* Bottom Row (smaller) */}
            <div className="flex-1 p-4 ">
                <p className="font-poppins-regular">
                    palomares.raymond.rivamonte@gmail.com
                </p>
                <Separator orientation="horizontal" color="bg-gray-300" thickness="h-px" length="w-1/2" className="my-3" />
                <p className="font-poppins-regular">+63 915 901 5664</p>
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

        
        {/* ========== About Me Section ==============*/}
        <section className="p-4 min-h-screen flex">
          <div className="w-full bg-blue-500 flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-semibold mb-4 font-poppins-regular">About Me</h2>
            <p className="flex justify-center text-center max-w-4xl mb-4">
              Hello! I'm Raymond Rivamonte, a passionate software engineer with a
              knack for creating efficient and innovative solutions. With a
              strong foundation in computer science and hands-on experience in
              various programming languages, I thrive on tackling complex
              challenges and turning ideas into reality. When I'm not coding, I
              enjoy exploring the latest tech trends and contributing to open
              source projects.
            </p>
            <h2 className="text-2xl font-semibold mb-4 font-poppins-regular">What I do:</h2>
            <p className="flex justify-center text-center max-w-4xl">
              Hello! I'm Raymond Rivamonte, a passionate software engineer with a
              knack for creating efficient and innovative solutions. With a
              strong foundation in computer science and hands-on experience in
              various programming languages, I thrive on tackling complex
              challenges and turning ideas into reality. When I'm not coding, I
              enjoy exploring the latest tech trends and contributing to open
              source projects.
            </p>
<div className="flex flex-row mt-8 w-full gap-4">
{tools.length > 0 && (tools.map((tool)=>(
<Card>
  <CardContent>
    <h3 className="text-lg font-medium mb-2">{tool.name}</h3>
    <p className="text-sm text-gray-600">{tool.description}</p>
  </CardContent>
</Card>
)))};
</div>
          </div>

        </section>

        {/* ========== Featured Projects Section ==============*/}
        <section className="p-4 min-h-screen flex gap-4">
          {/* Left column | small */}
          <div className="w-1/3 bg-gray-500 flex flex-col">
          </div>
          {/* Right column | large */}
          <div className="w-2/3 bg-red-500 flex flex-col">
            <div className="flex-4 bg-red-500 border-b-4 border-white">
              <p>jusko</p>
            </div>
            <div className="flex-1 bg-green-500"></div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Card 1 */}
            <Card>
              <CardContent>
                <p>React</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

          </div>
        </section>
      </div>
    </div>
  );
}
