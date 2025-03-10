import { mediaUrl } from "@/lib/utils";
import Image from "next/image";
import EnrollmentApplicationForm from "./enrollment-application";

export default function HeroBlock({
  content,
  image,
  notice,
  background,
}: Readonly<Hero>) {
  return (
    <div style={background ? { background } : {}}>
      <div className="container min-h-screen flex flex-col-reverse md:flex-row mx-auto">
        <div className="flex-1 flex flex-col items-center overflow-hidden">
          <div
            className="prose"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <EnrollmentApplicationForm />
          <p>{notice}</p>
        </div>
        {image && (
          <Image
            className="float-right h-full object-bottom w-full md:w-1/2"
            src={mediaUrl(image.formats?.medium?.url ?? image.url)}
            alt="hero"
            width={image.formats.medium?.width ?? image.width}
            height={image.formats.medium?.height ?? image.height}
          />
        )}
      </div>
    </div>
  );
}
