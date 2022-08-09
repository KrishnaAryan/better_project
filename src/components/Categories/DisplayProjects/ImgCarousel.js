import React from "react";
import Carousel from "react-elastic-carousel";
import "./DisplayProject.css";

import {
  Attibelle0,
  Attibelle1,
  Attibelle2,
  Attibelle3,
  Attibelle4,
  Attibelle5,
  Attibelle6,
  Attibelle7,
  Attibelle8,
  Attibelle9,
  Hennur1,
  Hennur2,
  Hennur3,
  Hennur4,
  Hennur5,
  Hennur6,
  Hennur7,
  Hennur8,
  Hennur9,
  Hennur10,
  Hennur21,
  Hennur22,
  Hennur23,
  Hennur24,
  Hennur25,
  Hennur26,
  Hennur27,
  Hennur28,
  Hennur29,
  Hennur210,
  Hulimav1,
  Hulimav2,
  Hulimav3,
  Hulimav4,
  Hulimav5,
  Hulimav6,
  Hulimav7,
  Hulimav8,
  Hulimav9,
  Hulimav10,
  Indiranagar1,
  Indiranagar2,
  Indiranagar3,
  Indiranagar4,
  Indiranagar5,
  Indiranagar6,
  Indiranagar7,
  Indiranagar8,
  Jigani1,
  Jigani2,
  Jigani3,
  Jigani4,
  Jigani5,
  Jigani6,
  Jigani7,
  Jigani8,
  Jigani9,
  Jigani10,
  Kanakapura1,
  Kanakapura2,
  Kanakapura3,
  Kanakapura4,
  Kanakapura5,
  Kanakapura6,
  Kanakapura7,
  Kanakapura8,
  Kanakapura9,
  Kanakapura10,
  Kengeri1,
  Kengeri2,
  Kengeri3,
  Kengeri4,
  Kengeri5,
  Kengeri6,
  Kengeri7,
  Kengeri8,
  Kengeri9,
  Kengeri10,
  KRPuram1,
  KRPuram2,
  KRPuram3,
  KRPuram4,
  KRPuram5,
  KRPuram6,
  KRPuram7,
  KRPuram8,
  KRPuram9,
  KRPuram10,
  Mallur1,
  Mallur2,
  Mallur3,
  Mallur4,
  Mallur5,
  Mallur6,
  Mallur7,
  Mandur1,
  Mandur2,
  Mandur3,
  Mandur4,
  Mandur5,
  Mandur6,
  Mandur7,
  Mandur8,
  Mandur9,
  Mandur10,
  Mandur21,
  Mandur22,
  Mandur23,
  Mandur24,
  Mandur25,
  Mandur26,
  Mandur27,
  Mandur28,
  Mandur29,
  Mandur210,
  Nagnathpura1,
  Nagnathpura2,
  Nagnathpura3,
  Nagnathpura4,
  Tumkur1,
  Tumkur2,
  Tumkur3,
  Tumkur4,
  Tumkur5,
} from "./index.js";

const Images = [
  {
    name: "Attibelle",
    image: Attibelle0,
  },
  {
    name: "Attibelle",
    image: Attibelle1,
  },
  {
    name: "Attibelle",
    image: Attibelle2,
  },
  {
    name: "Attibelle",
    image: Attibelle3,
  },
  {
    name: "Attibelle",
    image: Attibelle4,
  },
  {
    name: "Attibelle",
    image: Attibelle5,
  },
  {
    name: "Attibelle",
    image: Attibelle6,
  },
  {
    name: "Attibelle",
    image: Attibelle7,
  },
  {
    name: "Attibelle",
    image: Attibelle8,
  },
  {
    name: "Attibelle",
    image: Attibelle9,
  },
  {
    name: "Hennur",
    image: Hennur21,
  },
  {
    name: "Hennur",
    image: Hennur22,
  },
  {
    name: "Hennur",
    image: Hennur23,
  },
  {
    name: "Hennur",
    image: Hennur24,
  },
  {
    name: "Hennur",
    image: Hennur25,
  },
  {
    name: "Hennur",
    image: Hennur26,
  },
  {
    name: "Hennur",
    image: Hennur27,
  },
  {
    name: "Hennur",
    image: Hennur28,
  },
  {
    name: "Hennur",
    image: Hennur29,
  },
  {
    name: "Hennur",
    image: Hennur210,
  },
  {
    name: "Hennur-2",
    image: Hennur1,
  },
  {
    name: "Hennur-2",
    image: Hennur2,
  },
  {
    name: "Hennur-2",
    image: Hennur3,
  },
  {
    name: "Hennur-2",
    image: Hennur4,
  },
  {
    name: "Hennur-2",
    image: Hennur5,
  },
  {
    name: "Hennur-2",
    image: Hennur6,
  },
  {
    name: "Hennur-2",
    image: Hennur7,
  },
  {
    name: "Hennur-2",
    image: Hennur8,
  },
  {
    name: "Hennur-2",
    image: Hennur9,
  },
  {
    name: "Hennur-2",
    image: Hennur10,
  },
  {
    name: "Hulimavu",
    image: Hulimav1,
  },
  {
    name: "Hulimavu",
    image: Hulimav2,
  },
  {
    name: "Hulimavu",
    image: Hulimav3,
  },
  {
    name: "Hulimavu",
    image: Hulimav4,
  },
  {
    name: "Hulimavu",
    image: Hulimav5,
  },
  {
    name: "Hulimavu",
    image: Hulimav6,
  },
  {
    name: "Hulimavu",
    image: Hulimav7,
  },
  {
    name: "Hulimavu",
    image: Hulimav8,
  },
  {
    name: "Hulimavu",
    image: Hulimav9,
  },
  {
    name: "Hulimavu",
    image: Hulimav10,
  },
  {
    name: "Indiranagar",
    image: Indiranagar1,
  },
  {
    name: "Indiranagar",
    image: Indiranagar2,
  },
  {
    name: "Indiranagar",
    image: Indiranagar3,
  },
  {
    name: "Indiranagar",
    image: Indiranagar4,
  },
  {
    name: "Indiranagar",
    image: Indiranagar5,
  },
  {
    name: "Indiranagar",
    image: Indiranagar6,
  },
  {
    name: "Indiranagar",
    image: Indiranagar7,
  },
  {
    name: "Indiranagar",
    image: Indiranagar8,
  },
  {
    name: "Jigani",
    image: Jigani1,
  },
  {
    name: "Jigani",
    image: Jigani2,
  },
  {
    name: "Jigani",
    image: Jigani3,
  },
  {
    name: "Jigani",
    image: Jigani4,
  },
  {
    name: "Jigani",
    image: Jigani5,
  },
  {
    name: "Jigani",
    image: Jigani6,
  },
  {
    name: "Jigani",
    image: Jigani7,
  },
  {
    name: "Jigani",
    image: Jigani8,
  },
  {
    name: "Jigani",
    image: Jigani9,
  },
  {
    name: "Jigani",
    image: Jigani10,
  },
  {
    name: "Kanakapura",
    image: Kanakapura1,
  },
  {
    name: "Kanakapura",
    image: Kanakapura2,
  },
  {
    name: "Kanakapura",
    image: Kanakapura3,
  },
  {
    name: "Kanakapura",
    image: Kanakapura4,
  },
  {
    name: "Kanakapura",
    image: Kanakapura5,
  },
  {
    name: "Kanakapura",
    image: Kanakapura6,
  },
  {
    name: "Kanakapura",
    image: Kanakapura7,
  },
  {
    name: "Kanakapura",
    image: Kanakapura8,
  },
  {
    name: "Kanakapura",
    image: Kanakapura9,
  },
  {
    name: "Kanakapura",
    image: Kanakapura10,
  },
  {
    name: "Kengeri",
    image: Kengeri1,
  },
  {
    name: "Kengeri",
    image: Kengeri2,
  },
  {
    name: "Kengeri",
    image: Kengeri3,
  },
  {
    name: "Kengeri",
    image: Kengeri4,
  },
  {
    name: "Kengeri",
    image: Kengeri5,
  },
  {
    name: "Kengeri",
    image: Kengeri6,
  },
  {
    name: "Kengeri",
    image: Kengeri7,
  },
  {
    name: "Kengeri",
    image: Kengeri8,
  },
  {
    name: "Kengeri",
    image: Kengeri9,
  },
  {
    name: "Kengeri",
    image: Kengeri10,
  },
  {
    name: "KR Puram",
    image: KRPuram1,
  },
  {
    name: "KR Puram",
    image: KRPuram2,
  },
  {
    name: "KR Puram",
    image: KRPuram3,
  },
  {
    name: "KR Puram",
    image: KRPuram4,
  },
  {
    name: "KR Puram",
    image: KRPuram5,
  },
  {
    name: "KR Puram",
    image: KRPuram6,
  },
  {
    name: "KR Puram",
    image: KRPuram7,
  },
  {
    name: "KR Puram",
    image: KRPuram8,
  },
  {
    name: "KR Puram",
    image: KRPuram9,
  },
  {
    name: "KR Puram",
    image: KRPuram10,
  },
  {
    name: "Mallur",
    image: Mallur1,
  },
  {
    name: "Mallur",
    image: Mallur2,
  },
  {
    name: "Mallur",
    image: Mallur3,
  },
  {
    name: "Mallur",
    image: Mallur4,
  },
  {
    name: "Mallur",
    image: Mallur5,
  },
  {
    name: "Mallur",
    image: Mallur6,
  },
  {
    name: "Mallur",
    image: Mallur7,
  },
  {
    name: "Mandur",
    image: Mandur21,
  },
  {
    name: "Mandur",
    image: Mandur22,
  },
  {
    name: "Mandur",
    image: Mandur23,
  },
  {
    name: "Mandur",
    image: Mandur24,
  },
  {
    name: "Mandur",
    image: Mandur25,
  },
  {
    name: "Mandur",
    image: Mandur26,
  },
  {
    name: "Mandur",
    image: Mandur7,
  },
  {
    name: "Mandur",
    image: Mandur8,
  },
  {
    name: "Mandur",
    image: Mandur29,
  },
  {
    name: "Mandur",
    image: Mandur210,
  },
  {
    name: "Mandur-2",
    image: Mandur1,
  },
  {
    name: "Mandur-2",
    image: Mandur2,
  },
  {
    name: "Mandur-2",
    image: Mandur3,
  },
  {
    name: "Mandur-2",
    image: Mandur4,
  },
  {
    name: "Mandur-2",
    image: Mandur5,
  },
  {
    name: "Mandur-2",
    image: Mandur6,
  },
  {
    name: "Mandur-2",
    image: Mandur7,
  },
  {
    name: "Mandur-2",
    image: Mandur8,
  },
  {
    name: "Mandur-2",
    image: Mandur9,
  },
  {
    name: "Mandur-2",
    image: Mandur10,
  },
  {
    name: "Tumkuru",
    image: Tumkur1,
  },
  {
    name: "Tumkuru",
    image: Tumkur2,
  },
  {
    name: "Tumkuru",
    image: Tumkur3,
  },
  {
    name: "Tumkuru",
    image: Tumkur4,
  },
  {
    name: "Tumkuru",
    image: Tumkur5,
  },
  {
    name: "Nagnathpura",
    image: Nagnathpura1,
  },
  {
    name: "Nagnathpura",
    image: Nagnathpura2,
  },
  {
    name: "Nagnathpura",
    image: Nagnathpura3,
  },
  {
    name: "Nagnathpura",
    image: Nagnathpura4,
  },
];

const ImgCarousel = ({ slideRef, closeSlide, name, carousel }) => {
  return (
    <div className="project-slide-container" ref={slideRef} onClick={closeSlide}>
      <div className="project-slide-wrap">
        <Carousel>
          {carousel.map(({ url, name }, i) => {
            return <img className="proj-img" src={url} alt={name} key={i} />;
          })}
          {/*           {Images.map((img, i) => {
            if (name.current === img.name) {
              return <img className="proj-img" src={img.image} alt={"imge"} key={i} />;
            }
          })} */}
        </Carousel>
      </div>
    </div>
  );
};

export default ImgCarousel;
