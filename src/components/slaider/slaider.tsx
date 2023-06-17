import React, { FC, useState, useRef, useEffect } from 'react';
import {
  PerCentItem,
  SliderBox,
  SliderList,
  SliderPerCent,
  SliderListBox,
  SliderButton,
  SliderContainer,
} from './slaider.style';

import Product from '../product/product';

import { ReactComponent as Arrow } from '../../img/arrowSlaider.svg';
import { BD } from '../../BD/BD';

type SlaiderProps = {
  accent?: boolean;
  overflow?: string;
};

const Slaider: FC<SlaiderProps> = ({ accent = false, overflow = 'hidden' }) => {
  const [left, setLeft] = useState(0);
  const [xStart, setXStart] = useState(0);
  const [current, setCurrent] = useState(1);

  const ul = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (left === 0) {
      setCurrent(1);
    } else if (
      ul.current &&
      left <= -ul.current?.scrollWidth + ul.current?.clientWidth
    ) {
      setCurrent(5);
    } else {
      const width = window.outerWidth > 1440 ? 285 : 275;
      setCurrent(
        ul.current ? Math.ceil((left * -1) / (width * (9 / 3))) + 1 : 1
      );
    }
  }, [left]);

  function swapItem(swap: boolean) {
    const width = 255 + window.outerWidth > 1440 ? 285 : 275;
    setLeft(left => {
      let newLeft = left;

      if (
        ul.current?.clientWidth &&
        swap &&
        left > -ul.current?.scrollWidth + ul.current?.clientWidth
      )
        newLeft = newLeft - width;

      if (ul.current?.clientWidth && !swap && newLeft < 0)
        newLeft = newLeft + width;
      return newLeft;
    });
  }

  return (
    <SliderBox overflow={overflow}>
      <SliderContainer>
        <SliderButton
          type="button"
          onClick={() => swapItem(false)}
          disabled={current === 1}
        >
          <Arrow></Arrow>
        </SliderButton>

        <SliderListBox overflow={overflow}>
          <SliderList
            ref={ul}
            left={left}
            onTouchStart={e => {
              setXStart(e.changedTouches[0].clientX);
            }}
            onTouchEnd={e => {
              setXStart(0);
              const x = e.changedTouches[0].clientX;
              if (xStart !== x) swapItem(xStart - x > 0);
            }}
          >
            {BD.map(product => (
              <li>
                <Product product={product} />
              </li>
            ))}
            {/* <li>
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
            </li> */}
          </SliderList>
        </SliderListBox>

        <SliderButton
          type="button"
          right
          onClick={() => swapItem(true)}
          disabled={current === 5}
        >
          <Arrow></Arrow>
        </SliderButton>
      </SliderContainer>
      <SliderPerCent current={current} accent={accent}>
        <PerCentItem accent={accent}></PerCentItem>
        <PerCentItem accent={accent}></PerCentItem>
        <PerCentItem accent={accent}></PerCentItem>
        <PerCentItem accent={accent}></PerCentItem>
        <PerCentItem accent={accent}></PerCentItem>
      </SliderPerCent>
    </SliderBox>
  );
};

export default Slaider;
