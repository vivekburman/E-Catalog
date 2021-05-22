import React from 'react';
import Loadable from 'react-loadable';

interface LoaderProps extends Loadable.LoadingComponentProps  {}
const Loader : React.FC<LoaderProps> = (props: LoaderProps) => {
  return (
    <></>
  );
};

const Home = Loadable({
    loader: () => import('../components/home/home'),
    loading: Loader,
});

export default Home;