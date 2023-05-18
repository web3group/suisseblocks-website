import React, { forwardRef } from "react";

const ImageSequence = forwardRef((prop, ref) => {
  const newImages = prop.ImageArray;
  if (newImages === undefined) return null;
  let index = Math.round(prop.progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return;
    } else {
      return newImages.map((item, i) => (
        <span
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
          }}
          className='w-[100%] h-[100%] bg-cover bg-center'
        />
      ));
    }
  }
});

export default ImageSequence;
