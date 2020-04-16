import React, { useEffect, useState } from "react";
// import { Router, Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../pages/informations/About/About";
import Contact from "../pages/informations/Contact/Contact";
import firebase from "../firebase";
import InformationComponent from "../pages/informations/others/InformationComponent";
import BasketComponent from "../pages/basket/BasketComponent";
// import CategoryComponent from "../pages/categories/CategoryComponent";
// import { createBrowserHistory as history } from "history";
// import history from "../history";

const Routes = () => {
    const [otherRoutes, setOtherRoutes] = useState([]);

    useEffect(() => {
        const routesRef = firebase.database().ref("other routes");
        routesRef.on("value", (snapshot) => {
            let databaseRoutes = snapshot.val();
            let newRoutes = [];
            for (let dbRoute in databaseRoutes) {
                newRoutes.push({
                    id: dbRoute,
                    name: databaseRoutes[dbRoute].name,
                    path: databaseRoutes[dbRoute].path,
                });
            }
            setOtherRoutes(newRoutes);
        });
    }, []);

    return (
        <>
            <Route path="/basket">
                <BasketComponent />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>

            {otherRoutes.map((link) => (
                <Route path={`/${link.path}`} key={link.id}>
                    <InformationComponent headerName={link.name} />
                </Route>
            ))}
        </>
    );
};

export default Routes;
