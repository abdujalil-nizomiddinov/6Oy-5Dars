import "./App.css";
import { useState } from "react";
import Image1 from "./assets/1.jpg";
import Image2 from "./assets/2.jpg";
import Image3 from "./assets/3.jpg";
import Image4 from "./assets/4.jpg";
import Image5 from "./assets/5.jpg";
import Image6 from "./assets/6.jpg";
import Image7 from "./assets/7.jpg";
import Image8 from "./assets/8.jpg";
import Image9 from "./assets/9.jpg";
import Image10 from "./assets/10.jpg";
import Image11 from "./assets/11.jpg";
import Image12 from "./assets/12.jpg";
import Image13 from "./assets/13.jpg";
import Image14 from "./assets/14.jpg";
import Image15 from "./assets/15.jpg";
import Image16 from "./assets/16.jpg";
import Image17 from "./assets/17.jpg";
import Image18 from "./assets/18.jpg";
import Image19 from "./assets/19.jpg";
import Image20 from "./assets/20.jpg";
import Exit from "./assets/exit.png";
import { FaBars } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import Book from "./Book";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      image: Image1,
      price: 421,
      description:
        "A powerful novel on racial injustice.\nExplores childhood and morality.",
    },
    {
      id: 2,
      title: "Forgotten Home Apothecary",
      author: "George Orwell",
      year: 1949,
      image: Image2,
      price: 357,
      description:
        "Rediscover natural remedies.\nUseful guide for herbal healing.",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: Image3,
      price: 512,
      description: "A tale of wealth and dreams.\nSet in the Roaring Twenties.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      image: Image4,
      price: 638,
      description: "Romantic story of manners.\nElizabeth and Darcy’s journey.",
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      image: Image5,
      price: 789,
      description: "A boy discovers magic.\nBegins his wizarding adventure.",
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: Image6,
      price: 274,
      description: "A hobbit’s epic journey.\nBattles, dragons, and treasure.",
    },
    {
      id: 7,
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      image: Image7,
      price: 619,
      description: "Obsession with a whale.\nCaptain Ahab’s deadly pursuit.",
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      image: Image8,
      price: 433,
      description: "Teen alienation and angst.\nHolden’s view of adult world.",
    },
    {
      id: 9,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      image: Image9,
      price: 894,
      description: "Historical epic of Russia.\nWar, love, and philosophy.",
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      image: Image10,
      price: 580,
      description: "A murder and its guilt.\nPsychological depth and struggle.",
    },
    {
      id: 11,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      image: Image11,
      price: 723,
      description: "Dystopian future society.\nFreedom vs. control explored.",
    },
    {
      id: 12,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      image: Image12,
      price: 362,
      description: "Strong female protagonist.\nLove, struggle, and identity.",
    },
    {
      id: 13,
      title: "Animal Farm",
      author: "George Orwell",
      year: 1945,
      image: Image13,
      price: 456,
      description: "Allegory of revolution.\nAnimals fight for equality.",
    },
    {
      id: 14,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847,
      image: Image14,
      price: 548,
      description: "Dark romantic tragedy.\nLove and revenge on the moors.",
    },
    {
      id: 15,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: Image15,
      price: 985,
      description:
        "Epic battle of good vs evil.\nA journey across Middle-earth.",
    },
    {
      id: 16,
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      year: 1950,
      image: Image16,
      price: 341,
      description: "Magical world through a wardrobe.\nChildren become heroes.",
    },
    {
      id: 17,
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      image: Image17,
      price: 499,
      description: "A scientist creates life.\nMonster seeks acceptance.",
    },
    {
      id: 18,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890,
      image: Image18,
      price: 719,
      description:
        "Youth, beauty, and corruption.\nA portrait holds dark secrets.",
    },
    {
      id: 19,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
      image: Image19,
      price: 635,
      description: "A modern-day thriller.\nSecrets hidden in artworks.",
    },
    {
      id: 20,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      image: Image20,
      price: 370,
      description:
        "A journey of self-discovery.\nFollowing one’s true destiny.",
    },
  ]);

  const removeBooks = (id) => {
    const filteredBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(filteredBook);
    setBooksCount(filteredBook.length);
    alert(`The book with ID ${id} was successfully removed`);
  };
  const [modalBook, setModalBook] = useState(null);
  const openModal = (book) => {
    setModalBook(book);
  };
  const [heart, setHeart] = useState(false);
  const [booksCount, setBooksCount] = useState(books.length);

  return (
    <>
      <header className="w-full flex flex-col ">
        <nav className="mx-auto p-5 flex justify-between items-center w-full">
          <a
            href="https://t.me/n1zomiddinov_571"
            target="_blank"
            className="relative active:scale-95 text-3xl text-[lime] font-[900] cursor-pointer select-none tracking-[6px] hover:scale-z-[18px] rounded-[25%] px-4 py-2 duration-100 ease-out hover:duration-200 hover:ease-in shadow-[0_0_10px_1px_lime] bg-black z-10 outline-none focus-visible:shadow-[0_0_10px_1px_white] focus-visible:outline focus-visible:outline-lime-500"
          >
            <span className="relative z-10">Kitobchi</span>
            <span className="absolute inset-0 rounded-[25%] shadow-[inset_0_0_10px_lime] bg-black z-0"></span>
          </a>
          <div className="max-[650px]:block hidden text-[lime] text-4xl">
            <FaBars />
          </div>
          <ul className="flex gap-2 max-[800px]:gap-0 max-[650px]:hidden">
            <li>
              <a
                href="#"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Bosh sahifa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Kitoblar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Ustozlar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus:shadow-[inset_0_0_10px_yellow] focus:text-yellow-500 outline-none"
              >
                Bog‘lanish
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-5 relative max-w-[1200px] mx-30 max-[1000px]:mx-10">
          <img
            src="https://picsum.photos/1200/300"
            alt="bg"
            className="rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-w-full max-[450px]:hidden"
          />
          <img
            src="https://picsum.photos/400/100"
            alt="bg"
            className="absolute top-0 right-0 rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-[1270px]:max-w-[300px] max-[1050px]:max-w-[250px] max-[900px]:max-w-[200px] max-[800px]:max-w-[150px] max-[680px]:max-w-[130px] max-[650px]:hidden"
          />
          <img
            src="https://picsum.photos/400/100"
            alt="bg"
            className="absolute bottom-0 left-0 rounded-tr-[100%] rounded-bl-[100%] shadow-[0_0_15px_2px_lime] max-[1270px]:max-w-[300px] max-[1050px]:max-w-[250px] max-[900px]:max-w-[200px] max-[800px]:max-w-[150px] max-[680px]:max-w-[130px] max-[650px]:hidden"
          />
        </div>
      </header>
      <main className="mt-12 relative">
        <h2 className="text-[lime] text-2xl font-[900] ml-10">
          Books:[{booksCount}]
        </h2>
        {booksCount == 0 ? (
          <h2 className="absolute text-[lime] text-3xl left-[50%] translate-x-[-50%]">
            Kechirasiz bizda hozir kitoblar soni {booksCount}ga teng.
          </h2>
        ) : (
          <ul className="grid grid-cols-5 max-[1400px]:grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 mx-30 max-[1000px]:mx-10 my-10 gap-5 max-[350px]:mx-5">
            {books.map((book) => {
              return (
                <Book
                  book={book}
                  removeBooks={removeBooks}
                  openModal={openModal}
                  key={book.id}
                ></Book>
              );
            })}
          </ul>
        )}
      </main>

      {modalBook && (
        <div
          className="fixed w-[100vw] h-[100vh] left-0 top-0 bg-black/70 flex items-center justify-center z-10 cursor-pointer"
          onClick={() => setModalBook(null)}
        >
          <div
            className="bg-black p-5 rounded-xl max-w-md w-full relative text-[lime]  shadow-[0_0_30px_lime]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2 max-w-90">
              {modalBook.title}
            </h2>
            <p className="mb-1">
              <b>Author:</b> {modalBook.author}
            </p>
            <p className="mb-1">
              <b>Year:</b> {modalBook.year}
            </p>
            <p className="mb-1">
              <b>Description:</b> {modalBook.description}
            </p>
            <img
              src={modalBook.image}
              alt={modalBook.title}
              className="w-full mt-3 rounded"
            />
            <button
              onClick={() => setModalBook(null)}
              className="absolute top-4 right-4 cursor-pointer hover:bg-black/0 hover:shadow-[0_0_10px_lime] p-4 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
            >
              <img src={Exit} alt="exit" className="w-10" />
            </button>
            {heart == false ? (
              <button
                onClick={() => {
                  setHeart(true);
                }}
                className="absolute bottom-7 text-5xl right-7 cursor-pointer hover:bg-black/70 hover:shadow-[0_0_10px_lime] p-2 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
              >
                <IoIosHeartEmpty />
              </button>
            ) : (
              <button
                onClick={() => {
                  setHeart(false);
                }}
                className="absolute bottom-7 text-5xl right-7 cursor-pointer hover:bg-black/70 hover:shadow-[0_0_10px_lime] p-2 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
              >
                <IoIosHeart />
              </button>
            )}
          </div>
        </div>
      )}

      <footer className="w-full text-center my-2 mb-10 select-none cursor-pointer">
        <a
          href="https://t.me/n1zomiddinov_571"
          target="_blank"
          className="outline-none"
        >
          <span className="text-lg max-[500px]:text-center text-[lime] hover:text-yellow-400 transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_yellow] rounded-[25%] bg-transparent">
            &copy; Powered by Abdujalil Nizomiddinov (Devixo coder)
          </span>
        </a>
      </footer>
    </>
  );
}

export default App;
