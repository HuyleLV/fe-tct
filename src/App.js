import React, { useEffect, useState } from "react";
import video_home from "../src/asset/video/video-demo.mp4";
import whatapp from "../src/asset/whatapp.png";
import gmail from "../src/asset/gmail.png";
import film from "../src/asset/3d-film.png";
import house from "../src/asset/house.png";
import interior from "../src/asset/interior-design.png";
import staircase from "../src/asset/staircase.png";
import people from "../src/asset/people.jpg";
import bietthu from "../src/asset/bietthu.jpg";
import deleteIcon from "../src/asset/deleteIcon.png";
import bietthumot from "../src/asset/bietthumot.jpg";
import { Link } from "react-router-dom";
import { useDevice } from "../src/hooks";

const App = () => {
  const { isMobile } = useDevice();
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

  const handleImageClick = (image, thumbnailList) => {
    setSelectedImage(image);
    setThumbnails(thumbnailList);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setThumbnails([]);
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .fall-animation {
            animation: fall 1s ease forwards;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            display: none;
          }

          .open {
            display: flex;
          }

          .modal-content {
            position: relative;
            text-align: center;
          }

          .modal img {
            max-width: 90%;
            max-height: 80%;
          }

          .thumbnails {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }

          .thumbnails img {
            width: 80px;
            height: 80px;
            cursor: pointer;
            margin: 0 5px;
            border: 2px solid transparent;
          }

          .thumbnails img:hover {
            border: 2px solid white;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: white;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="relative">
        <video
          src={video_home}
          className="h-screen w-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-600 opacity-50" />

        <div className="absolute top-0 px-[5%] text-white w-full fixed-top">
          <div className="flex justify-between items-center pt-10">
            {isMobile ? (
              <h2 className={`text-xl font-bold fall-animation`}>
                Tôi là TRƯƠNG CÔNG TRÌNH
              </h2>
            ):(
              <h2 className={`text-4xl font-bold fall-animation`}>
                Tôi là TRƯƠNG CÔNG TRÌNH
              </h2>
            )}
            <div
              className="relative"
              onMouseEnter={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
            >
              <button className="text-xl font-bold bg-yellow-500 text-white px-8 py-2 rounded">
                Contact
              </button>
              {showOptions && (
                <div className="absolute top-10 right-0 bg-white text-black shadow-lg w-full rounded-b">
                  <Link to="https://wa.me/your-whatsapp-number" className="flex items-center justify-center p-2 font-semibold border-b border-gray-200">
                    <img src={whatapp} className="w-4 h-4 mr-2" alt="WhatsApp" />
                    WhatsApp
                  </Link>
                  <Link to="mailto:your-email@gmail.com" className="flex items-center justify-center p-2 font-semibold border-b border-gray-200">
                    <img src={gmail} className="w-4 h-4 mr-2" alt="Gmail" />
                    Gmail
                  </Link>
                </div>
              )}
            </div>
          </div>
          <p className="font-bold text-6xl pt-[250px] fall-animation">
            <span className="text-[70px] pb-4">SLOGAN</span>
          </p>
          <p className="font-semibold text-xl pt-10 fall-animation">Kiến trúc sư</p>
        </div>

        <div className="flex justify-center w-full">
          <div className="absolute w-2/3 h-[160px] bg-white z-10 mt-[-80px] rounded-xl shadow grid grid-cols-4 gap-4 border-2 border-gray-400 items-center text-center px-1">
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={house} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>Exterior Design</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={interior} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>Interior Design</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={staircase} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>2D - 3D Floor Plan</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={film} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>3D Film & Animation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="pt-40 grid grid-cols-2 gap-4">
          <div>
            <p className={`text-2xl font-bold pb-2 border-b-2 ${isMobile ? 'w-[150px]' : 'w-[200px]'} fall-animation`}>About Us?</p>
            <p className={`pt-10 ${isMobile ? 'text-[11px]' : 'text-md'}`}>
              Hi render est un studio de rendu créatif fondé en 2017 par Sandrine Karlen et Wassim Honeiny <br /> Architecte
              d’intérieur et Architecte. Aujourdhui nous mettons tous notre savoire faire <br /> dans la visualisation
              architecturale haut de gamme. 
            </p>
            <p className={`pt-4 ${isMobile ? 'text-[11px]' : 'text-md'}`}>
              Hi render est un studio de rendu créatif fondé en 2017 par Sandrine Karlen et Wassim Honeiny <br /> Architecte
              d’intérieur et Architecte. Aujourdhai nous mettons tous notre savoire faire <br /> dans la visualisation
              architecturale haut de gamme. 
            </p>
          </div>
          <div className="flex justify-center">
            <img src={people} className={`${isMobile ? 'w-2/3 h-[200px]' : 'w-2/3 h-[300px]'} rounded-xl`} loading="lazy" />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white">
        <div className="max-w-screen-2xl mx-auto mt-20 py-20">
          <p className="text-2xl font-bold mb-5 pb-2 border-b-2 w-[200px] fall-animation">Our Work</p>
          <div className={`${isMobile ? 'grid grid-cols-1 px-2' : 'grid grid-cols-2'} gap-4`}>
            {Array(6).fill().map((_, index) => (
              <div className="py-4" key={index}>
                <div className="flex" onClick={() => handleImageClick(bietthu, [bietthumot, bietthu, bietthu])}>
                  <img
                    src={bietthu}
                    className={`${isMobile ? 'w-[400px] h-[400px]' : 'w-[500px] h-[500px]'} border cursor-pointer`}
                    loading="lazy"
                  />
                  {!isMobile && (
                    <div>
                      <img
                        src={bietthumot}
                        className="w-[250px] h-[250px] border cursor-pointer"
                        loading="lazy"
                      />
                      <img
                        src={bietthumot}
                        className="w-[250px] h-[250px] border cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <p className="pt-5 text-2xl font-semibold">Biệt Thự Biệt Thự Biệt Thự</p>
                <p className="pt-2 text-xl text-gray-400">Tác Giả: Trương Công Trình</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-content flex items-start">
          <div>
            {selectedImage && <img src={selectedImage} className={isMobile ? 'w-[350px] h-[300px]' : 'w-[800px] h-[750px]'} alt="Selected" />}
            <div className="thumbnails">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(thumb)}
                />
              ))}
            </div>
          </div>
          <img className="cursor-pointer" src={deleteIcon} width={40} height={40} onClick={closeModal}/>
        </div>
      </div>

      <footer className="bg-black text-white py-10">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <p className={`${isMobile ? 'text-[13px] font-bold' : 'text-xl font-bold'}`}>Trương Công Trình</p>
          </div>
          <div className="text-center">
            <p className={`${isMobile ? 'text-[13px] font-bold' : 'text-xl font-bold'}`}>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
            <p className="text-lg">Email: your-email@gmail.com</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.behance.net/yourprofile" className="hover:underline">Behance</a>
            <a href="https://www.facebook.com/yourprofile" className="hover:underline">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;