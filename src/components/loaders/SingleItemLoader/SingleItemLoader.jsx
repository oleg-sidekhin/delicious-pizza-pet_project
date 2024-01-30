import { Circles } from 'react-loader-spinner';
import classes from './SingleItemLoader.module.scss';

function SingleItemLoader() {
  return (
    <div className={classes.loader}>
      <Circles
        height="80"
        width="80"
        color="#fe7f1e"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Загрузка...</p>
    </div>
  );
}

export default SingleItemLoader;
