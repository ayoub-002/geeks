import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-0 m-0">
      <div className="w-screen">
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_200,h_200/cities/jrfyzvgzvhs1iylduuhj.jpg"
              alt="Hong Kong"
              className="w-screen h-[90vh] object-cover mx-auto"
            />
            <p className="legend">Hong Kong</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_200,h_200/cities/c1cklkyp6ms02tougufx.webp"
              alt="Macao"
              className="w-screen h-[90vh] object-cover mx-auto"
            />
            <p className="legend">Macao</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_200,h_200/cities/e8fnw35p6zgusq218foj.webp"
              alt="Japan"
              className="w-screen h-[90vh] object-cover mx-auto"
            />
            <p className="legend">Japan</p>
          </div>
          <div>
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_200,h_200/cities/liw377az16sxmp9a6ylg.webp"
              alt="Las Vegas"
              className="w-screen h-[90vh] object-cover mx-auto"
            />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
