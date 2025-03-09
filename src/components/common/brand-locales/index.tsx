import { request } from "@/configs/fetch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default async function BrandLocale() {
  const { data } = await request<Locale[]>("i18n/locales");

  return (
    <div className="container mx-auto w-full flex justify-between p-5">
      <div>
        <Image
          className="max-h-8 w-auto"
          src={"/logos/1w-ex-dark.webp"}
          alt="1wireless excess"
          width={775}
          height={119}
        />
      </div>
      <div className="brand-locale__locale">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Locale" />
          </SelectTrigger>
          <SelectContent>
            {data?.map((locale) => (
              <SelectItem key={locale.documentId} value={locale.code}>
                {locale.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
