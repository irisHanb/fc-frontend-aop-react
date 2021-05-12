import { useSelector, useDispatch } from 'react-redux';
import { decrease, increse, setDiff } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
  const { number, diff } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increse());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </div>
  );
}

export default CounterContainer;
