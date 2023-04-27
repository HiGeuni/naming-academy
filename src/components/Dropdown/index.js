import { useState, useRef, useEffect } from "react";
import {
  DropdownButton,
  DropdownContainer,
  Li,
  LinkWrapper,
  Menu,
  Ul,
} from "./style";
import { HiUserCircle } from "react-icons/hi";

const DropdownMenu = ({ setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownButton onClick={removeHandler} ref={ref}>
        <HiUserCircle style={{ width: "50px", height: "50px" }} />
      </DropdownButton>
      <Menu isDropped={isOpen}>
        <Ul>
          <Li>
            <LinkWrapper onClick={() => setShowModal(true)} href="#1-1">
              프로필 사진 변경
            </LinkWrapper>
          </Li>
          <Li>
            <LinkWrapper href="#1-2">로그아웃</LinkWrapper>
          </Li>
        </Ul>
      </Menu>
    </DropdownContainer>
  );
};

export default DropdownMenu;
