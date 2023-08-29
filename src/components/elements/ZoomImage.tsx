import React, { useEffect, useRef, useState } from "react";
import PinchZoom from "pinch-zoom-js";
import styled from "styled-components";
import { handleImage } from "../../utils/CommonFunction";

const ZoomImage = ({ image }: { image: string }) => {
  const zoom = useRef(null);
  const pinch = useRef(null);

  const [able, setAble] = useState(false);

  useEffect(() => {
    if (zoom.current !== null) {
      //@ts-ignore
      pinch.current = new PinchZoom(zoom.current, {
        draggableUnzoomed: able,
        zoomOutFactor: 1.3,
        animationDuration: 200,
        setOffsetsOnce: true,
        minZoom: 0.5,
        maxZoom: 4,
        onZoomStart: function (object: any, event: any) {},
        onZoomEnd: function (object: any, event: any) {},
        onZoomUpdate: function (object: any, event: any) {
          if (pinch.current !== null) {
            //@ts-ignore
            if (pinch.current.zoomFactor > 1) {
              setAble(true);
            } else {
              setAble(false);
            }
          }
        },
      });
    }
  }, [zoom]);

  return (
    <DetailPicture ref={zoom}>
      <img src={handleImage(image)} alt="zoom_image" />
    </DetailPicture>
  );
};

export default ZoomImage;

const DetailPicture = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
