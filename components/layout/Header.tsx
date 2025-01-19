import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center flex-wrap">
        <div className="text-2xl font-bold">Logo</div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex space-x-4 flex-wrap items-center">
          <Button label={"Sign In"} onClick={() => alert("Sign In")} />
          <Button label={"Sign Up"} onClick={() => alert("Sign Up")} />
        </div>
        <div className="mt-4 flex flex-row gap-3 flex-wrap items-center">
          <Button label="Rooms" onClick={() => alert("Rooms")} />
          <Button label="Mansion" onClick={() => alert("Mansion")} />
          <Button label="Countryside" onClick={() => alert("Countryside")} />
        </div>
      </div>
    </header>
  );
};

export default Header;
