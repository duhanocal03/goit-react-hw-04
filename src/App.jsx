import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import fetchImages from "./Services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        
        if (data.results.length === 0) {
          toast.error("Görsel bulunamadı!");
          return;
        }

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      
      {isError && <ErrorMessage />}
      
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={setSelectedImage} />
      )}
      
      {isLoading && <Loader />}
      
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((p) => p + 1)} />
      )}
      
      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage} 
      />
    </div>
  );
}

export default App;