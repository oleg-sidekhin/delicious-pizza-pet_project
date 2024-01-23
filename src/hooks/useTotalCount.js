import { useSelector } from 'react-redux';

function useTotalCount() {
  const totalAmount = useSelector(
    (state) =>
      state.cart.cart &&
      state.cart.cart.reduce((acc, item) => acc + item.count, 0)
  );

  const totalCount = useSelector(
    (state) =>
      state.cart.cart &&
      state.cart.cart.reduce((acc, item) => acc + item.totalCountPrice, 0)
  );

  return { totalCount, totalAmount };
}

export { useTotalCount };
