import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2Icon } from "lucide-react";
import { CodeCard } from "./card-code";
import Link from "next/link";

interface Props {
  title?: string;
  description?: string;
  website?: string;
  content?: string;
  id: number;
  cms?: string;
  code: string;
  db?: string;
  frame?: string;
}

export const CardSection = ({
  title,
  frame,
  cms,
  code,
  db,
  website,
  content,
  id,
}: Props) => {
  return (
    <Card
      key={id}
      className="min-h-[350px] lg:min-h-[500px] bg-[#2d2d2d1c] text-white flex flex-col justify relative"
    >
      <CardHeader>
        <CardTitle>
         <span className="hidden lg:block">
          <CodeCard title={title} />
        </span>
          <h1 className="text-[24px]">{title}</h1>
        </CardTitle>
        <CardDescription>
          <div className="flex-col flex">
            {code && (
              <span>
                <strong>Frontend:</strong> {code}
              </span>
            )}
            {cms && (
              <span>
                <strong>Backend:</strong> {cms}
              </span>
            )}
            {db && (
              <span>
                <strong>Backend</strong> {db}
              </span>
            )}
            {frame && (
              <span>
                <strong>Code:</strong> {frame}
              </span>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="mt-5">
        {website && (
          <Link
            className="absolute bottom-5  flex bg-[#2d2d2d] mt-4 px-5 py-2 gap-2 items-center"
            href={`https://${website}`}
            target="_blank"
          >
            Go to project <Code2Icon />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
