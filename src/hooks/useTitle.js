import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - SAFAR`;
  }, [title]);
};

export default useTitle;
