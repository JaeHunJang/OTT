import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import bingleicon from '../../assets/icons/bingle_bingle_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import {
  getClothesList,
  bookmarkClothes,
  unbookmarkClothes,
} from '../../api/closet/clothes';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ClothesGrid = ({ onClothesClick }) => {
  const [clothes, setClothes] = useState([]); // 옷 목록 상태
  const [visibleItems, setVisibleItems] = useState(12); // 한 번에 보여줄 항목 수
  const [visibleImages, setVisibleImages] = useState([]); // 보이는 이미지 상태 (앞면/뒷면)
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const containerRef = useRef(null); // 스크롤 컨테이너 참조

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const userId = 1;
        const clothesWithKeys = await getClothesList(userId);
        setClothes(clothesWithKeys);
        setVisibleImages(
          clothesWithKeys.map((item) => ({ id: item.key, isFront: true }))
        );
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchClothes();
  }, []);

  // 가로 무한 스크롤 처리 함수
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        setVisibleItems((prev) => prev + 12);
      }
    }
  };

  // 좌로 스크롤
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // 우로 스크롤
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // 이미지 앞/뒷면 토글 함수
  const handleToggleImage = (key) => {
    setVisibleImages((prev) =>
      prev.map((item) =>
        item.id === key ? { ...item, isFront: !item.isFront } : item
      )
    );
  };

  // 좋아요 상태 토글 함수
  const handleToggleLike = async (key) => {
    const toggledItem = clothes.find((item) => item.key === key);
    if (toggledItem) {
      const clothesId = toggledItem.clothesId;

      try {
        if (toggledItem.bookmarkStatus === 'BOOKMARKING') {
          await unbookmarkClothes(clothesId);
          setClothes((prevClothes) =>
            prevClothes.map((item) =>
              item.key === key
                ? { ...item, bookmarkStatus: 'UNBOOKMARKED' }
                : item
            )
          );
        } else {
          await bookmarkClothes(clothesId);
          setClothes((prevClothes) =>
            prevClothes.map((item) =>
              item.key === key
                ? { ...item, bookmarkStatus: 'BOOKMARKING' }
                : item
            )
          );
        }
      } catch (error) {
        console.error('Error changing bookmark status:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>; // 로딩 중일 때 표시
  if (error) return <div>Error loading clothes: {error.message}</div>; // 에러 발생 시 표시

  // clothes 배열이 비어있을 때 빈 상태 표시
  if (!clothes.length) {
    return <div>옷이 없습니다.</div>;
  }

  return (
    <div className="relative w-full p-1">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <div onClick={scrollLeft} className="bg-gray-200 p-2 rounded-full">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <div onClick={scrollRight} className="bg-gray-200 p-2 rounded-full">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div
        className="w-full overflow-x-auto p-1 touch-pan-x"
        ref={containerRef}
        style={{
          WebkitOverflowScrolling: 'touch',
          overflowX: 'auto',
          position: 'relative',
          scrollbarWidth: 'none',
        }}
      >
        <div
          className="grid grid-flow-col auto-cols-max grid-rows-2 gap-1"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {clothes.slice(0, visibleItems).map((item) => {
            const isFrontVisible = visibleImages.find(
              (image) => image.id === item.key
            )?.isFront;

            const frontImage = item.img?.[0];
            const backImage = item.img?.[1];

            return (
              <div
                key={item.key}
                className="flex-none w-52 h-60 p-2 rounded-lg relative flex flex-col items-center cursor-pointer"
                style={{ minWidth: '100px', height: '190px' }}
                onClick={() => onClothesClick(item)}
              >
                <img
                  src={isFrontVisible ? frontImage : backImage}
                  alt={item.category}
                  className="w-full h-full rounded-lg shadow-lg"
                />
                {backImage && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleImage(item.key);
                    }}
                    className="absolute top-3 right-4 p-1 cursor-pointer"
                  >
                    <img src={bingleicon} alt="Toggle" className="w-4 h-4" />
                  </div>
                )}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleLike(item.key);
                  }}
                  className="absolute top-3 left-3 p-1 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={
                      item.bookmarkStatus === 'BOOKMARKING'
                        ? faSolidStar
                        : faRegularStar
                    }
                    className="w-4 h-4 text-purple-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 하단 스크롤바 제거 */}
      <style>{`
        .w-full::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
};

export default ClothesGrid;
