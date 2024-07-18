import { getCourseById } from "@/app/lib/api";
import Image from "next/image";

interface IProps {
  params: { id: number };
}
export default async function Details(props: IProps) {
  const detalis = await getCourseById(props.params.id);

  return (
    <div>
      <p className="is-size-3 p-6 m-6">Course {detalis.id}</p>
      <h1 className="is-size-2">{detalis.name}</h1>
      <Image
        src={`/${detalis.cover}`}
        alt={detalis.name}
        width={500}
        height={300}
      />
      <p>{detalis.duration} month</p>

      <strong>{detalis.price} AMD </strong>
    </div>
  );
}
