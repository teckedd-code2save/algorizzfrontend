"use client"

interface ScrollProps {
  targetId: string;
  className: string;
  children: React.ReactNode;
}

const Scroll = ({ targetId,className, children }: ScrollProps) => {
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

  return (
    <a href={`#${targetId}`} className={className} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default Scroll;