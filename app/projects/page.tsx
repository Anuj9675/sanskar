"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Social Media Post",
    description:
      "Creative post for Instagram made using Canva with a modern aesthetic design.",
    tools: ["Canva"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396193249407926334/Social_media_post.png?ex=687dda8a&is=687c890a&hm=94538ce82db4afcf26792f331ab5ac0b61836de40ef630891bca6dc79c7f82c9&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396193249407926334/Social_media_post.png?ex=687dda8a&is=687c890a&hm=94538ce82db4afcf26792f331ab5ac0b61836de40ef630891bca6dc79c7f82c9&",
  },
  {
    id: 2,
    title: "Website Section UI",
    description: "UI of Website Section",
    tools: ["Canva"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396195804863267040/9589bc03-64cd-4bdf-a2ae-832bbecd150b.png?ex=687ddceb&is=687c8b6b&hm=a285a577a5fcb0b9d11374274e80156f30909f01b15fbce33ae739e85fe0528f&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396195804863267040/9589bc03-64cd-4bdf-a2ae-832bbecd150b.png?ex=687ddceb&is=687c8b6b&hm=a285a577a5fcb0b9d11374274e80156f30909f01b15fbce33ae739e85fe0528f&",
  },
  {
    id: 3,
    title: "Magazine Cover Design",
    description: "Modern magazine cover layout designed in Photoshop",
    tools: ["Photoshop"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192572199796816/Magazie_cover.jpg?ex=687dd9e9&is=687c8869&hm=d17e4b33dfaf1dc072df04f302f60af94926506ce73a9223ca5d305050f558bc&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192572199796816/Magazie_cover.jpg?ex=687dd9e9&is=687c8869&hm=d17e4b33dfaf1dc072df04f302f60af94926506ce73a9223ca5d305050f558bc&",
  },
  {
    id: 4,
    title: "Tourism Ad",
    description: "A minimal and attractive ad design made in Photoshop.",
    tools: ["Photoshop"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192573386657842/Tourism_ad.jpg?ex=687dd9e9&is=687c8869&hm=0de9cf9e684e8265165ab43e9bf275d095f943db81e42533be7781fd2eb7d0e5&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192573386657842/Tourism_ad.jpg?ex=687dd9e9&is=687c8869&hm=0de9cf9e684e8265165ab43e9bf275d095f943db81e42533be7781fd2eb7d0e5&",
  },
  {
    id: 5,
    title: "Card Design ",
    description: "Simple and professional card layout created with Canva.",
    tools: ["Canva"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192310810644600/Card.jpg?ex=687dd9aa&is=687c882a&hm=81666c7eccb05f4310a12fccc0a913d9726cfec3f3bc649f66b477e6d6ee3537&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192310810644600/Card.jpg?ex=687dd9aa&is=687c882a&hm=81666c7eccb05f4310a12fccc0a913d9726cfec3f3bc649f66b477e6d6ee3537&",
  },
  {
    id: 6,
    title: "wedding Card Design",
    description: "Another sleek card version designed using Photoshop.",
    tools: ["Photoshop"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192693348073522/card_22.jpg?ex=687dda06&is=687c8886&hm=590db34f6c5add6b8455a38b6bf4c6d0cd7e8d62f27d388fefb17a35e4bf30a0&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396192693348073522/card_22.jpg?ex=687dda06&is=687c8886&hm=590db34f6c5add6b8455a38b6bf4c6d0cd7e8d62f27d388fefb17a35e4bf30a0&",
  },
  {
    id: 7,
    title: "Poster Design",
    description: "Bold and bright poster concept crafted on Canva.",
    tools: ["Canva"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396193248019480748/999.jpg?ex=687dda8a&is=687c890a&hm=dd452fec82df92b51618e5e5299517df0abbb8e31256bee01eb2c46eb6795ddd&",
    demoLink:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396193248019480748/999.jpg?ex=687dda8a&is=687c890a&hm=dd452fec82df92b51618e5e5299517df0abbb8e31256bee01eb2c46eb6795ddd&",
  },
  {
    id: 8,
    title: "Figma Prototype UI",
    description:
      "Fully interactive Spotify UI prototype designed in Figma with clickable flows.",
    tools: ["Figma"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396395370023747634/Screenshot_115.png?ex=687dee07&is=687c9c87&hm=9437c9e75fd016e9818db639298408fd795b0f5a0e2a00c12988d2de7331c8da&",
    demoLink:
      "https://www.figma.com/proto/ZvalZFlTcDL35LiVEDXtY6/Untitled?page-id=0%3A1&node-id=145-43&p=f&viewport=152%2C205%2C0.47&t=m6XTr0mwxWtcAtoK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=145%3A43",
  },
  {
    id: 9,
    title: "Figma Prototype UI",
    description:
      "Fully interactive Landing Page UI prototype designed in Figma with clickable flows.",
    tools: ["Figma"],
    imageUrl:
      "https://cdn.discordapp.com/attachments/905489514649239553/1396202772491141203/image.jpg?ex=687de369&is=687c91e9&hm=57d14115a896356c35969a5d2722a3950a10f7d62eccbe48e7b8b73dfe76c018&",
    demoLink:
      "https://www.figma.com/proto/ZvalZFlTcDL35LiVEDXtY6/Untitled?page-id=0%3A1&node-id=1-193&p=f&viewport=152%2C205%2C0.47&t=m6XTr0mwxWtcAtoK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=145%3A43",
  },
];

export default function ProjectsPage() {
  const [activeImage, setActiveImage] = useState<
    null | (typeof portfolioItems)[0]
  >(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16 relative">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-300">
          Here are some of my UI/UX and graphic design works made using tools
          like Figma, Canva, and Photoshop.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-purple-800 hover:bg-purple-700 font-bold text-white px-6 py-2 rounded-lg shadow"
        >
           ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {portfolioItems.map((proj) => (
          <div
            key={proj.id}
            className="rounded-xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div
              className="relative h-52 w-full cursor-pointer"
              onClick={() => setActiveImage(proj)}
            >
              <Image
                src={proj.imageUrl}
                alt={proj.title}
                fill
                unoptimized
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proj.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <Link
                  href={proj.demoLink}
                  target="_blank"
                  className="w-full text-center bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg text-sm"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-4xl w-full mx-4 bg-gray-900 rounded-xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white hover:text-red-400"
              onClick={() => setActiveImage(null)}
            >
              <X size={30} />
            </button>
            <Image
              src={activeImage.imageUrl}
              alt={activeImage.title}
              width={1200}
              height={800}
              unoptimized
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{activeImage.title}</h2>
              <p className="text-gray-300 mb-4">{activeImage.description}</p>
              <div className="flex flex-wrap gap-2">
                {activeImage.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
