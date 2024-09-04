import Nav from "@/components/Nav";
interface Iprops {
  children: React.ReactNode;
}

const layout = ({ children }: Iprops) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default layout;
