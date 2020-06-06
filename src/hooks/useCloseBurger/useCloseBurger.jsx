import { useEffect, useContext } from "react";
import { BurgerMenuContext } from "../../components/app/App";

const useCloseBurger = () => {
    const Burger = useContext(BurgerMenuContext);
    const setOpen = Burger.setOpenBurger;

    useEffect(() => {
        setOpen(false);
        return setOpen(false);
    }, [setOpen]);
};

export default useCloseBurger;
