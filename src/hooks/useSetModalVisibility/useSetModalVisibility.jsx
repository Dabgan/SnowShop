import { useReducer } from "react";

const useSetModalVisibility = () => {
    const modalReducer = (state, action) => {
        return action ? false : !state;
    };

    const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);
    return [isModalVisible, setIsModalVisible];
};

export default useSetModalVisibility;
