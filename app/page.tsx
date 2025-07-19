import Image from "next/image";
import Category from "@/components/category";
import AllCategory from "@/components/All";
import CategoryCard from "@/components/categoryCard";
export default function Home() {
  return (
    <div className="min-h-screen pt-[8rem] bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      <CategoryCard />
      <AllCategory />
     <Category category="electronics"/>
    </div>
  );
}
