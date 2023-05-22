import React, { FC, useState, useRef, useEffect } from 'react';
import {
  PerCentItem,
  SliderBox,
  SliderList,
  SliderPerCent,
} from './slaider.style';
import Product from '../product/product';

type SlaiderProps = {};

const Slaider: FC<SlaiderProps> = props => {
  const [left, setLeft] = useState(0);
  const [xStart, setXStart] = useState(0);
  const [current, setCurrent] = useState(1);

  const ul = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (left === 0) {
      setCurrent(1);
    } else if (
      ul.current &&
      left < -ul.current?.scrollWidth + ul.current?.clientWidth
    ) {
      setCurrent(5);
    } else {
      setCurrent(ul.current ? Math.ceil((left * -1) / (275 * (9 / 3))) + 1 : 1);
    }
  }, [left]);

  return (
    <SliderBox>
      <SliderList
        ref={ul}
        left={left}
        onTouchStart={e => {
          setXStart(e.changedTouches[0].clientX);
        }}
        onTouchEnd={e => {
          setXStart(0);

          const x = e.changedTouches[0].clientX;

          setLeft(left => {
            let newLeft = left;

            if (
              ul.current?.clientWidth &&
              xStart - x > 0 &&
              left > -ul.current?.scrollWidth + ul.current?.clientWidth
            )
              newLeft = newLeft - 255 - 20;

            if (ul.current?.clientWidth && xStart - x < 0 && newLeft < 0)
              newLeft = newLeft + 255 + 20;
            return newLeft;
          });
        }}
      >
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
      </SliderList>
      <SliderPerCent current={current}>
        <PerCentItem></PerCentItem>
        <PerCentItem></PerCentItem>
        <PerCentItem></PerCentItem>
        <PerCentItem></PerCentItem>
        <PerCentItem></PerCentItem>
      </SliderPerCent>
    </SliderBox>
  );
};

export default Slaider;
