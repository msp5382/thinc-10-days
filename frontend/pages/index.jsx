import Navbar from "../components/navbar";

const Index = () => {
  return (
    <div
      style={{
        background: "url(/background-pictures/index-background.svg)",
        backgroundSize: "cover",
      }}
      className="min-h-screen min-w-screen flex"
    >
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Index;
