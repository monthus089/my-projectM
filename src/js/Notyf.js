import { Notyf } from "notyf";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// เพิ่มไอคอนที่คุณต้องการใช้งานใน library
library.add(faExclamationTriangle);

// สั่งให้ Font Awesome แทรกไอคอนเข้าสู่ DOM
dom.watch();

export const notyf = new Notyf({
  duration: 1000,
  position: {
    x: 'center',
    y: 'bottom',
  },
  types: [
    {
      type: 'warning',
      background: 'orange',
      duration: 2000,
      dismissible: true,
      icon: {
        className: 'fas fa-exclamation-triangle',
        tagName: 'i',
        color : 'white'
      }
    },
    {
      type: 'error',
      background: 'indianred',
      duration: 2000,
      dismissible: true
    },
    {
      type: 'success',
      duration: 2000,
      dismissible: true
    }
  ],
});

export default notyf;