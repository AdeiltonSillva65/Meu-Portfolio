import Menu from "@/components/menu"
import Sobre from "@/components/sobre";

const page = () => {
  return (
    <section className="h-screen bg-zinc-900">
      <Menu />
      <Sobre />
    </section >
  );
}

export default page;