import { useCursorContext } from '../../pages/_app';
import React from 'react';
import styles from './NavRight.module.css';

const NavRight = () => {
  const { setCursorVariantFn } = useCursorContext();
  return (
    <div class="section-right">
      <div class="nav">
        <div class="nav-item">
          <a
            data-w-id="85d26124-a07a-0189-15d9-074cdc5da320"
            href="/work"
            class="nav-link"
          >
            Work
          </a>
          <div
            data-w-id="0c6f66a3-df45-8c28-3b45-4cb00dc90a70"
            class="nav-underline"
          ></div>
        </div>
        <div class="nav-item">
          <a
            data-w-id="462a282a-3c93-b2c2-4bc4-1c45b323fa3f"
            href="/about"
            class="nav-link"
          >
            About
          </a>
          <div
            data-w-id="0ee3525f-5420-fd26-63a6-43019d96aacd"
            class="nav-underline"
          ></div>
        </div>
        <div class="nav-item">
          <a
            data-w-id="3006e0ba-b29c-1f44-16fa-9f2df904cb4d"
            href="/contact"
            class="nav-link"
          >
            Contact
          </a>
          <div
            data-w-id="1f20fda9-810a-dac8-bc48-c04ef1ba5f25"
            class="nav-underline"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
