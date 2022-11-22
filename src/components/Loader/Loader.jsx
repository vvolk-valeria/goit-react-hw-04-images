import { RotatingLines } from 'react-loader-spinner';
import { Bars } from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Spinner, SpinnerBtn } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Spinner>
  );
};

export const BtnLoader = () => {
  return (
    <SpinnerBtn>
      <Bars
        height="20"
        width="60"
        color="#1d6b7d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinnerBtn>
  );
};
