import { BookReader } from "@/components/book/book-reader";
import { bookPages } from "@/data/book-content";

export default function HomePage() {
  return <BookReader pages={bookPages} />;
}
