import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = `
Телеграмм площадка оригинальных товаров, на которой каждый сможет найти/купить/продать обувь и одежду: <a href="https://t.me/liquidbay" style="color: #00344B" target="_blank">LiquidBay</a>
`;

export const model = [
  new TitleBlock("Конструктов сайтов на Javascript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(90deg, #00344B, #0082C3, #00344B)",
      color: "#fff",
      padding: "1rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "800px",
      height: "auto",
      "border-radius": "20px",
    },
    alt: "Главная картинка",
  }),
  new ColumnsBlock(
    [
      "JavaScript один из самых популярных языков программирования в мире.",
      "Первоначально язык Javascript назывался Mocha, в какой-то момент стал LiveScript, и наконец стал называться Javascript в тот момент, когда язык Java был провозглашен спасителем жизни.",
      "Функциями можно оперировать, как и любыми другими элементами. Их можно привязывать к переменным и, в более поздних версиях JavaScript, даже выбрасывать как исключения.",
    ],
    {
      styles: {
        "background-color": "#00344B",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      "background-color": "#0082C3",
      padding: "1rem",
      "font-weight": "bold",
      color: "#fff",
    },
  }),
];
