import { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const About = (props: Props): JSX.Element => {
  return (
    <svg
      width='64'
      height='16'
      viewBox='0 0 64 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      style={props.style}
    >
      <path
        d='M6 0.879999C7.81333 0.879999 9.24 1.41333 10.28 2.48C11.3333 3.53333 11.86 5.06 11.86 7.06V15H10.4V10.88H1.6V15H0.16V7.06C0.16 5.06 0.68 3.53333 1.72 2.48C2.77333 1.41333 4.2 0.879999 6 0.879999ZM10.4 9.6V6.92C10.4 5.36 10.0133 4.18667 9.24 3.4C8.46667 2.6 7.38667 2.2 6 2.2C4.61333 2.2 3.53333 2.6 2.76 3.4C1.98667 4.18667 1.6 5.36 1.6 6.92V9.6H10.4ZM22.0156 4.4C23.0023 4.4 23.8956 4.62667 24.6956 5.08C25.4956 5.52 26.1223 6.14667 26.5756 6.96C27.029 7.77333 27.2556 8.7 27.2556 9.74C27.2556 10.78 27.029 11.7067 26.5756 12.52C26.1223 13.3333 25.4956 13.9667 24.6956 14.42C23.8956 14.8733 23.0023 15.1 22.0156 15.1C21.1356 15.1 20.3423 14.9133 19.6356 14.54C18.9423 14.1667 18.3823 13.6267 17.9556 12.92V15H16.5956V0.159999H18.0156V6.48C18.4556 5.8 19.0156 5.28667 19.6956 4.94C20.389 4.58 21.1623 4.4 22.0156 4.4ZM21.9156 13.84C22.649 13.84 23.3156 13.6733 23.9156 13.34C24.5156 12.9933 24.9823 12.5067 25.3156 11.88C25.6623 11.2533 25.8356 10.54 25.8356 9.74C25.8356 8.94 25.6623 8.22667 25.3156 7.6C24.9823 6.97333 24.5156 6.49333 23.9156 6.16C23.3156 5.81333 22.649 5.64 21.9156 5.64C21.169 5.64 20.4956 5.81333 19.8956 6.16C19.309 6.49333 18.8423 6.97333 18.4956 7.6C18.1623 8.22667 17.9956 8.94 17.9956 9.74C17.9956 10.54 18.1623 11.2533 18.4956 11.88C18.8423 12.5067 19.309 12.9933 19.8956 13.34C20.4956 13.6733 21.169 13.84 21.9156 13.84ZM35.0503 15.1C34.037 15.1 33.1236 14.8733 32.3103 14.42C31.497 13.9533 30.857 13.3133 30.3903 12.5C29.9236 11.6867 29.6903 10.7667 29.6903 9.74C29.6903 8.71333 29.9236 7.79333 30.3903 6.98C30.857 6.16667 31.497 5.53333 32.3103 5.08C33.1236 4.62667 34.037 4.4 35.0503 4.4C36.0636 4.4 36.977 4.62667 37.7903 5.08C38.6036 5.53333 39.237 6.16667 39.6903 6.98C40.157 7.79333 40.3903 8.71333 40.3903 9.74C40.3903 10.7667 40.157 11.6867 39.6903 12.5C39.237 13.3133 38.6036 13.9533 37.7903 14.42C36.977 14.8733 36.0636 15.1 35.0503 15.1ZM35.0503 13.84C35.797 13.84 36.4636 13.6733 37.0503 13.34C37.6503 12.9933 38.117 12.5067 38.4503 11.88C38.7836 11.2533 38.9503 10.54 38.9503 9.74C38.9503 8.94 38.7836 8.22667 38.4503 7.6C38.117 6.97333 37.6503 6.49333 37.0503 6.16C36.4636 5.81333 35.797 5.64 35.0503 5.64C34.3036 5.64 33.6303 5.81333 33.0303 6.16C32.4436 6.49333 31.977 6.97333 31.6303 7.6C31.297 8.22667 31.1303 8.94 31.1303 9.74C31.1303 10.54 31.297 11.2533 31.6303 11.88C31.977 12.5067 32.4436 12.9933 33.0303 13.34C33.6303 13.6733 34.3036 13.84 35.0503 13.84ZM53.3694 4.48V15H52.0094V13.08C51.636 13.72 51.1227 14.22 50.4694 14.58C49.816 14.9267 49.0694 15.1 48.2294 15.1C46.856 15.1 45.7694 14.72 44.9694 13.96C44.1827 13.1867 43.7894 12.06 43.7894 10.58V4.48H45.2094V10.44C45.2094 11.5467 45.4827 12.3867 46.0294 12.96C46.576 13.5333 47.356 13.82 48.3694 13.82C49.476 13.82 50.3494 13.4867 50.9894 12.82C51.6294 12.14 51.9494 11.2 51.9494 10V4.48H53.3694ZM63.1264 14.36C62.8597 14.6 62.5331 14.7867 62.1464 14.92C61.7597 15.04 61.3531 15.1 60.9264 15.1C59.9397 15.1 59.1797 14.8333 58.6464 14.3C58.1131 13.7667 57.8464 13.0133 57.8464 12.04V2.18H59.2664V4.48H62.4464V5.68H59.2664V11.96C59.2664 12.5867 59.4197 13.0667 59.7264 13.4C60.0331 13.72 60.4797 13.88 61.0664 13.88C61.7064 13.88 62.2264 13.7 62.6264 13.34L63.1264 14.36Z'
        fill='black'
      />
    </svg>
  );
};
