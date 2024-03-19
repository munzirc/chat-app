import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations, setConversations } = useGetConversation(search);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;

    const filteredconversation = conversations.filter((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if(filteredconversation.length > 0) {
       setConversations(filteredconversation);
    } else {
      toast.error("No such user found")
      setSearch("");
    }
  };

  useEffect(()=> {
    return () => setSearch("");
  },[])


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
