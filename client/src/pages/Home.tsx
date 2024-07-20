import Autoplay from "embla-carousel-autoplay";
import metamask from "@/assets/metamask.png";

import { Card, CardContent } from "@/components/primitives/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/primitives/carousel";

const CarouselContents: {
  title: string;
  image: string;
  description: string;
}[] = [
  {
    title: "MetaMask",
    image: metamask,
    description:
      "The platform integrates with MetaMask for secure heart-2-heart transactions.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-10 w-full md-lg:w-[46%]">
      <h1 className="text-[#406be9] text-6xl font-major font-extrabold text-center text-wrap leading-tight">
        BLK LUV.ORG
      </h1>
      <p className="text-lg text-center font-epilogue md-lg:text-left">
       &quot;Earn 💯% of your funds #blkluvorg&quot; Wizard of Hahz<br />
       <a href="https://T.me/blkluvorg">t.me/blkluvorg</a><br />
       Made with LUV by <a href="https://tiktok.com/@hahzcandy">@HAHZCANDY</a>
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
          align: "center",
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {CarouselContents.map((c, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-transparent border border-white/40">
                  <CardContent className="flex flex-col items-center justify-center gap-3 p-6 aspect-square">
                    <h1 className="text-lg font-extrabold text-center font-major">
                      {c.title}
                    </h1>
                    <img className="size-24" src={c.image} />
                    <p className="text-base text-center font-epilogue">
                      {c.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
