import preloader from "../../../assets/img/preloader.gif";
import React from "react";
import s from './Preloader.module.css'

export const Preloader = (props) => {
    return <img className={s.preloader} src={preloader} alt="preloader"/>
}