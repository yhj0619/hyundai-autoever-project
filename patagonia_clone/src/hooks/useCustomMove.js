import { useNavigate } from "react-router-dom";

function useCustomMove() {
  const navigate = useNavigate();
  const moveToRead = (id) => {
    navigate({
      pathname: `../detail/${id}`,
    });
  };

  const addToCart = (id) => {
    navigate({
      pathname: `../cart`,
    });
  };
  return { moveToRead, addToCart };
}

export default useCustomMove;
