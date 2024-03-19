import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetConversations = (name) => {
  const [loading, setLoading] = useState(false);
  const [initialName, setInitialName] = useState(name);
  const { conversations, setConversations } = useConversation();

  const getConversations = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("name", name);
      const res = await fetch(`api/users?${params.toString()}`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setConversations(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (name === initialName) {
      getConversations();
    } 
    
    if (name !== initialName) {
      timeoutId = setTimeout(() => {
        getConversations();
      }, 500); 
    }

    return () => {
      clearTimeout(timeoutId);
    };

  }, [name, initialName]);

  return {
    loading,
    conversations,
    setConversations,
  };
};

export default useGetConversations;
