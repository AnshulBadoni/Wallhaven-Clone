import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

const Home = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const apikey = process.env.REACT_APP_WALP_API;

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
  }, [searchTerm]);

  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = `https://wallhaven.cc/api/v1/search?q=${searchTerm}&apikey=${apikey}&page=${page}`;

  useEffect(() => {
    console.log('useEffect has run');
    // Construct the API URL with the search term
    fetch(
       corsProxy + apiUrl
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.length === 0) {
          setHasMore(false);
        }
        setImages((prevImages) => [...prevImages, ...data.data]);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm, page, apikey, apiUrl]);
  
  const handlePageChange = () => {
    // Update the current page
    setPage(page + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={handlePageChange}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {images.map((image) => {
          return (
            <div className="feat-row" key={image.id}>
              <span className="lg-thumb">
                {/* eslint-disable-next-line */}
                <a href={image.path} target="_blank">
                  <img
                    src={image.thumbs.large}
                    width="350px"
                    height="220px"
                    alt="walpp"
                  />
                </a>
              </span>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default Home;
