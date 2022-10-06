import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newContentText, setNewContentText] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    if (!newContentText) {
      return;
    }

    setComments([...comments, newContentText]);
    setNewContentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewContentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const newCommentList = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(newCommentList);
  }

  const isNewCommentEmpty = newContentText.length === 0;

  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={author.avatarUrl} />
          <div className="flex flex-col">
            <strong className="leading-relaxed font-bold text-gray-100">
              {author.name}
            </strong>
            <span className="leading-relaxed text-gray-400 text-sm">
              {author.role}
            </span>
          </div>
        </div>
        <time
          className="text-sm leading-relaxed text-gray-400"
          title={publishedDateFormatted}
          dateTime="2022-01-10 06:28:00"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="leading-relaxed text-gray-300 mt-6">
        {content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p>
            );
          } else if (line.type === "link") {
            return (
              <p key={line.content} className="mt-4">
                <a
                  href="#"
                  className="hover:text-green-300 font-bold text-green-500"
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 pt-6 border-t border-gray-600 w-full"
      >
        <strong className="font-bold text-gray-100 leading-[1.4rem] block">
          Deixe seu feedback
        </strong>
        <footer className="group">
          <textarea
            name="comment"
            className="w-full bg-gray-900 resize-none leading-relaxed text-gray-300 placeholder:text-gray-300 rounded-lg h-24 p-4 mt-4"
            placeholder="Deixe um comentário..."
            value={newContentText}
            onChange={handleNewCommentChange}
          />
          <button
            type="submit"
            className="text-white font-bold mt-4 bg-green-500 rounded-lg py-4 px-6 hover:bg-green-300 disabled:opacity-70 disabled:hover:bg-green-500 disabled:cursor-not-allowed transition-colors hidden group-focus-within:block"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
