import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (message: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className="flex gap-4 mt-8">
      <Avatar src="https://github.com/lindias.png" />

      <div className="flex-1">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-gray-100 text-sm leading-relaxed">
                Lincoln Dias Marques
              </strong>
              <time
                className="text-xs leading-relaxed text-gray-400"
                title="01 de Outubro às 06:28h"
                dateTime="2022-01-10 06:28:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash
                size={24}
                className="bg-transparent text-gray-400 hover:text-red-500"
              />
            </button>
          </header>

          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            {content}
          </p>
        </div>

        <footer className="mt-4">
          <button
            className="flex items-center text-gray-400 hover:text-green-300"
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} className="mr-3" />
            Aplaudir
            <span className="before:content-['\2022'] before:px-1">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
