import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - Recipe Finder`;
  }, [title]);
};

export default usePageTitle;
