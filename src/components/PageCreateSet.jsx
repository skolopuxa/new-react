import React from "react";
import { Header } from "./Header";
import { Link, Outlet } from "react-router-dom";

export function PageCreateSet(){
    return <div>
        <Header />
        <h2>Административная панель</h2>
<Link to="/">Создать сет</Link>
<h1>
    <nav className="main-menu">
        <ul>
            <li>
                <Link className="main-menu__link" to="/admin/createset"> Создание сета </Link>
            </li>
        </ul>
    </nav>
</h1>
        <Outlet />
    </div>;
}