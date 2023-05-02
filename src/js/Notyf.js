import { Notyf } from "notyf";

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
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning'
      }
    },
    {
      type: 'error',
      background: 'indianred',
      duration: 2000,
      dismissible: true
    }
  ]
});

export default notyf;