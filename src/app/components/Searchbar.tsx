"use client";

import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

export default function Searchbar() {
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form className="flex justify-between bg-gray-100 gap-4 p-2 rounded-md flex-1">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        onSubmit={(e) => handleSearch(e)}
      />
      <button className="cursor-pointer">
        <IoMdSearch className="text-2xl hover-effect" />
      </button>
    </form>
  );
}
