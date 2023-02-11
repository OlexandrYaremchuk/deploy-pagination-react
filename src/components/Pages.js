// розгортаємо нашу компоненту. ВИкористовуємо комбінації rfc
import React from "react";
import "../components/style.css";

// В нашій новій компоненті Pages, як аргументи ми будемо приймати через пропси photos та loading
// Одразу пропишемо диструктуризацію

const Pages = ({ photos }) => {
  return (
    <ul className="pagesList">
      {photos.map((photo, i) => {
        return (
          <li className="pagesListItem">
            {photo.id}.<span></span>
            <li></li>
            {photo.title}
            <img src={photo.url}></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Pages;

//*! Тепер нам потрібно повернутись в компоненту APP та налаштувати, як та які елементи
//*! повині відображатись
// Для цього нам потрібно отримати індекс першої сторінки та індекс останьої сторінки, а вже потім будемо
// визначати чи поточну сторінку чи сторінку, яку потрібно відображати
