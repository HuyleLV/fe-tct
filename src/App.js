import React, { useEffect, useRef, useState } from "react";
import video_home from "../src/asset/video/video-demo.mp4";
import whatapp from "../src/asset/whatapp.png";
import gmail from "../src/asset/gmail.png";
import cad from "../src/asset/cad.png";
import film from "../src/asset/3d-film.png";
import house from "../src/asset/house.png";
import interior from "../src/asset/interior-design.png";
import staircase from "../src/asset/staircase.png";
import people from "../src/asset/people.jpg";
import bietthu from "../src/asset/bietthu.jpg";
import deleteIcon from "../src/asset/deleteIcon.png";
import bietthumot from "../src/asset/bietthumot.jpg";
import next from "../src/asset/next.png";
import previous from "../src/asset/previous.png";
import { Link } from "react-router-dom";
import { useDevice } from "../src/hooks";

const App = () => {
  const { isMobile } = useDevice();
  const aboutRef = useRef(null);
  const ourRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(thumbnails[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < thumbnails.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(thumbnails[currentIndex + 1]);
    }
  };

  const handleImageClick = (image, thumbnailList) => {
    setSelectedImage(image);
    setThumbnails(thumbnailList);
    setCurrentIndex(0); // Đặt lại chỉ số hiện tại
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setThumbnails([]);
    setCurrentIndex(0); // Đặt lại chỉ số khi đóng modal
  };

  const handleThumbnailClick = (thumb, index) => {
    setSelectedImage(thumb);
    setCurrentIndex(index);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOur = () => {
    if (ourRef.current) {
      ourRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
              <div>
                <h2 className={`text-xl font-bold fall-animation`}>
                  Tôi là TRƯƠNG CÔNG TRÌNH
                </h2>
                <h3 className={`text-lg fall-animation pt-2`}>DESIGN & VISUALIZATION</h3>
              </div>
            ) : (
              <div>
                <h2 className={`text-4xl font-bold fall-animation`}>
                  Tôi là TRƯƠNG CÔNG TRÌNH
                </h2>
                <h3 className={`text-xl fall-animation pt-2`}>DESIGN & VISUALIZATION</h3>
              </div>
            )}
            <div className="flex items-center">
              <h3 className={`text-xl fall-animation pt-2 pr-5 cursor-pointer`} onClick={scrollToAbout}>ABOUT US</h3>
              <div
                className="relative"
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
              >
                <button className="text-xl font-bold bg-yellow-500 text-white px-6 py-2 rounded">
                  Contact
                </button>
                {showOptions && (
                  <div className="absolute top-10 right-0 bg-white text-black shadow-lg w-full rounded-b">
                    <Link to="https://wa.me/0935304384" className="flex items-center justify-center p-2 font-semibold border-b border-gray-200">
                      <img src={whatapp} className="w-4 h-4 mr-2" alt="WhatsApp" />
                      WhatsApp
                    </Link>
                    <Link to="mailto:truongcongtrinh.arch@gmail.com" className="flex items-center justify-center p-2 font-semibold border-b border-gray-200">
                      <img src={gmail} className="w-4 h-4 mr-2" alt="Gmail" />
                      Gmail
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="font-bold text-6xl pt-[300px] fall-animation">
            <span className="text-[70px] pb-4">SLOGAN</span>
          </p>
          <p className="font-semibold text-xl py-10 fall-animation">Kiến trúc sư</p>
        </div>

        <div className="flex justify-center w-full text-black absolute top-60 px-[5%] mt-[420px]">
          <div className="absolute w-2/3 h-[160px] bg-white z-10 rounded-xl shadow grid grid-cols-5 gap-4 border-2 border-gray-400 items-center text-center px-1 fall-animation">
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
                  <img src={staircase} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>Interior Design</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={interior} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
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
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <img src={cad} className={isMobile ? 'w-[30px] h-[30px]' : 'w-[60px] h-[60px]'} loading="lazy" />
                </div>
                <p className={`${isMobile ? 'text-[11px]' : 'text-xl'} font-semibold pt-1`}>2D AutoCAD Work</p>
              </div>
            </div>
          </div>
          <button className="text-xl font-bold bg-yellow-500 text-white px-6 py-2 rounded fall-animation mt-[200px]" onClick={scrollToOur}>
            Our Achievements
          </button>
        </div>
      </div>

      <div ref={ourRef} className="bg-slate-800 text-white">
        <div className="max-w-screen-2xl mx-auto py-20">
          <div className={`${isMobile ? 'grid grid-cols-1 px-2' : 'grid grid-cols-2'} gap-4`}>
            {Array(6).fill().map((_, index) => (
              <div className="py-4" key={index}>
                <div className="flex" onClick={() => handleImageClick(bietthu, [bietthumot, bietthu, bietthu])}>
                  <img
                    src={bietthu}
                    className={`${isMobile ? 'w-[400px] h-[300px]' : 'w-[500px] h-[350px]'} border cursor-pointer`}
                    loading="lazy"
                  />
                  {!isMobile && (
                    <div>
                      <img
                        src={bietthumot}
                        className="w-[250px] h-[175px] border cursor-pointer"
                        loading="lazy"
                      />
                      <img
                        src={bietthumot}
                        className="w-[250px] h-[175px] border cursor-pointer"
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

      <div ref={aboutRef} className="max-w-screen-2xl mx-auto px-2">
        <div className="py-40 grid grid-cols-2 gap-4">
          <div>
            <p className={`text-2xl font-bold pb-2 border-b-2 ${isMobile ? 'w-[150px]' : 'w-[200px]'} fall-animation`}>About Us?</p>
            <p className={`pt-10 ${isMobile ? 'text-[11px]' : 'text-md'}`}>
              Hi render est un studio de rendu créatif fondé en 2017 par Sandrine Karlen et Wassim Honeiny. 
              Architecte d’intérieur và Architecte. Aujourdhui chúng tôi đưa tất cả kỹ năng của mình 
              vào việc hình dung kiến trúc cao cấp. 
            </p>
            <p className={`pt-4 ${isMobile ? 'text-[11px]' : 'text-md'}`}>
              Hi render est un studio de rendu créatif fondé en 2017 par Sandrine Karlen et Wassim Honeiny. 
              Architecte d’intérieur và Architecte. Aujourdhai chúng tôi đưa tất cả kỹ năng của mình 
              vào việc hình dung kiến trúc cao cấp. 
            </p>
          </div>
          <div className="flex justify-center">
            <img src={people} className={`${isMobile ? 'w-2/3 h-[200px]' : 'w-2/3 h-[300px]'} rounded-xl`} loading="lazy" />
          </div>
        </div>
      </div>

      <div className={`modal ${isModalOpen ? "open" : ""}`} onClick={closeModal}>
        <div className="modal-content flex items-center justify-between" onClick={(e) => e.stopPropagation()}> 
          <img
            className={`text-black font-bold py-2 px-4 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
            onClick={handleBack}
            disabled={currentIndex === 0}
            src={previous} 
            width={isMobile ? 60 : 100} 
            height={isMobile ? 60 : 100} 
            />

          <div className="flex flex-col items-center">
            {selectedImage && (
              <img
                src={selectedImage}
                className={isMobile ? 'w-[400px] h-[300px]' : 'w-[900px] h-[700px]'}
                alt="Selected"
              />
            )}
            <div className="thumbnails">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(thumb, index)}
                />
              ))}
            </div>
          </div>
          <img
            className={`text-black font-bold py-2 px-4 rounded ${currentIndex === thumbnails.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
            onClick={handleNext}
            disabled={currentIndex === thumbnails.length - 1}
            src={next} 
            width={isMobile ? 60 : 100} 
            height={isMobile ? 60 : 100} 
            />
        </div>
        
        <img
          className="cursor-pointer absolute top-2 right-2"
          src={deleteIcon}
          width={isMobile ? 30 : 50} 
          height={isMobile ? 30 : 50} 
          onClick={closeModal}
          alt="Close"
        />
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