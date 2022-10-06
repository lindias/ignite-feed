import Head from "next/head";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lindias.png",
      name: "Lincoln Dias Marques",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-01 01:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Fullstack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-01 01:30:00"),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Feed</title>
      </Head>
      <Header />
      <div className="max-w-[70rem] my-8 mx-auto px-4 grid text-sm md:text-base grid-cols-1 md:grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          <div className="space-y-8">
            {posts.map((post) => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
