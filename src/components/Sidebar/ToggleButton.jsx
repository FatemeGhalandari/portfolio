import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ setOpen, open }) => {
  return (
    <button
      className="fixed z-[1] top-6 left-6 w-[50px] h-[50px] bg-transparent border-r-[50%] border-none cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </button>
  );
};

export default ToggleButton;
