import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2Icon } from "lucide-react";
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
      className="min-h-[340px] bg-transparent text-white flex flex-col justify relative"
    >
      <CardHeader>
        <CardTitle>
          <h2 className="font-mono text-2xl">{title}</h2>
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
      <CardFooter>
        {website && (
          <Link
            className="absolute bottom-5  flex gap-2 items-center"
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
