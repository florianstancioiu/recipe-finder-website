import { baseUrl } from "./urls";

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const fullUrl = (path: string) => {
  return `${baseUrl}${path}`;
};
