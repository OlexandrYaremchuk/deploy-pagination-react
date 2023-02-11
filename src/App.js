import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pages from "./components/Pages";
// import Pagination from "./components/Pagination";
import { Pagination, Stack } from "@mui/material";

function App(props) {
  // загальний стейт для нашої сторінки
  const [photos, setPhotos] = useState([]);
  // прописуємо стан для сторінки, яку потрібно подавати. По дефолту це буде 1(перша сторінка)
  const [currentPage, setCurentPage] = useState(1);
  // і ще один стейт в якому будемо зберігати кількість елементів, яку будемо показувати на сторінці.
  // Ми його міняти не будемо тому можемо вказати один аргумент без сет
  const [countElement] = useState(10);

  // робимо
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data);
    });
  }, []);

  const lastPhotoIndex = currentPage * countElement;
  const firstPhotoIndex = lastPhotoIndex - countElement;
  const currentPhotos = photos.slice(firstPhotoIndex, lastPhotoIndex);
  //*! const paginationPoint = (pageNumber) => setCurentPage(pageNumber);

  //*! const NextPage = () => {
  // *!  setCurentPage((prev) => prev + 1);
  //*! };
  //*! const PrevPage = () => {
  //  *! setCurentPage((prev) => prev - 1);
  // *!};

  return (
    <div className="App">
      <h1>Photos</h1>
      <Pages photos={currentPhotos} />
      <Pagination
        // колір боксу з цифрою
        color="primary"
        // к-ть цифр (загальна к-ть сторінок) в рядку пагінації
        count={lastPhotoIndex}
        // фактична сторінка
        page={currentPage}
        // далі нам потрібно вказати параметр який буде нам показувати сторінку
        // при клікові чи при зміні стоірнки
        onChange={(_, num) => setCurentPage(num)}
        // к-ть символів збоку від фактичноʼ сторінки
        siblingCount={1}
        // к-ть символів на початку списку з кожного боку
        boundaryCount={2}
        // показати кнопки на мочаток на кінець
        showFirstButton
        showLastButton
        // стилі
        sx={{
          marginTop: "40px",
          marginLeft: "38%",
        }}
      />
    </div>
  );
}

export default App;
